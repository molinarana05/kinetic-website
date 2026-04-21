import Foundation
import Vision
import AppKit

func performOCR(on imagePath: String) {
    guard let image = NSImage(contentsOfFile: imagePath),
          let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("Error: Could not load image at \(imagePath)")
        return
    }

    let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    let request = VNRecognizeTextRequest { (request, error) in
        if let error = error {
            print("Error: \(error.localizedDescription)")
            return
        }

        guard let observations = request.results as? [VNRecognizedTextObservation] else { return }

        for observation in observations {
            guard let topCandidate = observation.topCandidates(1).first else { continue }
            print("\(topCandidate.string)")
        }
    }

    request.recognitionLevel = .accurate
    
    do {
        try requestHandler.perform([request])
    } catch {
        print("Error: \(error.localizedDescription)")
    }
}

let arguments = CommandLine.arguments
if arguments.count < 2 {
    print("Usage: swift ocr_vision.swift <image_path>")
} else {
    performOCR(on: arguments[1])
}

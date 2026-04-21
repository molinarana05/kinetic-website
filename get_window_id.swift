import AppKit

let options = CGWindowListOption(arrayLiteral: .excludeDesktopElements, .optionOnScreenOnly)
let windowList = CGWindowListCopyWindowInfo(options, kCGNullWindowID) as! [[String: Any]]

for window in windowList {
    if let ownerName = window[kCGWindowOwnerName as String] as? String {
        let windowName = window[kCGWindowName as String] as? String ?? ""
        let windowNumber = window[kCGWindowNumber as String] as? Int ?? 0
        print("Owner: \(ownerName), Name: \(windowName), ID: \(windowNumber)")
    }
}

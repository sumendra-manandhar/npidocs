---
sidebar_position: 5
---

# 5. Integration with Mobile Apps
 
 
 ## 5.1. Webview
Opening NPI Billers in a WebView is a straightforward process. Simply select the desired 
landing page and load it within the WebView. Communication between NPI Billers and the app's 
WebView is facilitated through a JavaScript interface. The table below outlines the available 
JavaScript methods along with their corresponding arguments.

## Javascript methods

 <table border="1">
        <tr>
            <th>Method </th>
            <th>Signature</th>
            <th>Description</th>
        </tr>
        <tr>
           <td>onMessageListen</td>
             <td>onMessageListen(message: String)</td>
            <td>
                NPI Billers sends all the messages in this JavaScript method. 
                The host app should handle messages based on their type.
            </td>
        </tr>
    </table>


## For android,

https://developer.android.com/reference/android/webkit/WebView#addJavascriptInterface(java.la
ng.Object,%20java.lang.String)
class JsObject {
 @JavascriptInterface
 public String onMessageListen(String message) {
 // Validate the session and prompt user to authorize the 
transaction
 
 return "";
 }
}
webview.getSettings().setJavaScriptEnabled(true);
webView.addJavascriptInterface(new JsObject(), "ANDROID");
webView.loadData("html", "text/html", null);
webView.loadUrl("https://dev.connectips.com/billers/billers?token=xxx")
;

## For ios,

https://developer.apple.com/documentation/webkit/wkwebview
import WebKit
class ViewController: UIViewController, WKScriptMessageHandler {
 var webView: WKWebView!
 override func viewDidLoad() {
 super.viewDidLoad()
 let contentController = WKUserContentController()
 contentController.add(self, name: "onMessageListen")
 let config = WKWebViewConfiguration()
 config.userContentController = contentController
 webView = WKWebView(frame: self.view.frame, configuration: config)
 self.view.addSubview(webView)
 if let url = URL(string: "https://dev.connectips.com/billers/billers?token=xxx") {
 webView.load(URLRequest(url: url))
 }
 }
 func userContentController(_ userContentController: WKUserContentController, didReceive 
message: WKScriptMessage) {
 if message.name == "onMessageListen" {
 if let messageBody = message.body as? String {
 print("JavaScript message received: (messageBody)")
 }
 }
 }
}

## 5.2. Deeplinks
Integration with deeplinks will be supported very soon


 

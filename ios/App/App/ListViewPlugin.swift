import Foundation
import Capacitor
@objc(ListViewPlugin)
public class ListViewPlugin: CAPPlugin {
    @objc func present(_ call: CAPPluginCall) {
        let items = call.getArray("items", String.self) ?? [String]()
        let listView = TableViewController()
        listView.items = items
        DispatchQueue.main.async {
            self.bridge?.viewController?.present(listView, animated: true)
        }
    }
}
class TableViewController: UITableViewController {
    var items: [String] = [String]()
    override func viewDidLoad(){
        super.viewDidLoad()
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
    }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row]
        return cell
    }
}

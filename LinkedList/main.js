import { print } from '../Stack/utils.js'
import { LList } from './LinkedList.js'

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print("");
cities.remove("Carlisle");
cities.display();
print("");
cities.dispReverse()

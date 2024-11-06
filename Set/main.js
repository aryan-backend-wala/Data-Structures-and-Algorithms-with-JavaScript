import { Set } from "./Set.js";
import { print } from "../Stack/utils.js"

let x = new Set()
let y = new Set()

x.add('a')
x.add('b')
x.add('c')
x.add('d')

y.add('a')
y.add('b')
y.add('c')

let z = new Set();
z = x.intersect(y)
print(z.show())

print(x.show())
print(y.show())
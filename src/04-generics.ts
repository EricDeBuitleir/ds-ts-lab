import {friends, colleagues} from './01-basics'
import { Friend, Colleague, BuddyList } from './myTypes';

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))


console.log("============================================================================")
// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(sort<Colleague>(colleagues.current,(a, b) => a.contact.extension - b.contact.extension));
console.log("============================================================================")


// used function findMatch as refence example
function sort<S>( result : S[], rules: (x: S, y: S) => number) : S[] { //
    return result.sort((rules))
}

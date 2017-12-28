import { Observable } from 'data/observable'

export class HelloWorldModel extends Observable {

    items = [
        {
            value: 'item 1',
            quantity: 5
        },
        {
            value: 'item 2',
            quantity: 12
        },
        {
            value: 'item 3',
            quantity: 2
        },
        {
            value: 'item 4',
            quantity: 77
        },
        {
            value: 'item 5',
            quantity: 13
        }
    ]

}

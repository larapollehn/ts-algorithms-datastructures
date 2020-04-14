export class Node<T> {
    public readonly value: T;
    public next: Node<T>;
    public previous: Node<T> = null;

    constructor(value: T, next: Node<T>, previous: Node<T>) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    compareTo(otherNode: Node<T>): number {
        if (this.value === otherNode.value) {
            return 0
        } else {
            return 1;
        }
    }
}

export class Stack<T>{
    public head: Node<T> = null;
    public tail: Node<T> = null;

    /**
     * Add a new element to the stack
     * @param t new value
     */
    push(t: T): void {

    }

    /**
     * Remove and return the next element of the stack
     */
    pop(): T{
        return null;
    }
}
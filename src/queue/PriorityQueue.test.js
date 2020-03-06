import PriorityQueue from './PriorityQueue'

test('队列中加入三个优先级不同的数，并依次出列，确认顺序是否正确', () => {
    let queue = new PriorityQueue()
    queue.enqueue('p2', 3)
    queue.enqueue('p1', 1)
    queue.enqueue('p5', 7)
    queue.enqueue('p4', 6)
    queue.enqueue('p3', 5)
    expect(queue.size()).toBe(5)
    expect(queue.dequeue().value).toBe('p1')
    expect(queue.dequeue().value).toBe('p2')
    expect(queue.dequeue().value).toBe('p3')
    expect(queue.dequeue().value).toBe('p4')
    expect(queue.dequeue().value).toBe('p5')
    expect(queue.size()).toBe(0)    
})



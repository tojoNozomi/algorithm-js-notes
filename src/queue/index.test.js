import Queue from './index'

test('队列中加入一个数，长度为1', () => {
    let queue = new Queue()
    queue.enqueue(5)
    expect(queue.size()).toBe(1)
})

test('队列中加入一个空值，返回false并提示错误', () => {
    let queue = new Queue()
    expect(queue.enqueue()).toBe(false)
    expect(queue.size()).toBe(0)
})

test('队列中加入多个值，确认队头，并依次返回，确认正确顺序，最后确认是否为空', () => {
    let queue = new Queue()
    queue.enqueue(5, 6, 7)
    expect(queue.size()).toBe(3)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.front()).toBe(5)
    expect(queue.dequeue()).toBe(5)
    expect(queue.dequeue()).toBe(6)
    expect(queue.dequeue()).toBe(7)
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBe(true)
})

test('队列中加入几个数，并清空，判断是否为空', () => {
    let queue = new Queue()
    queue.enqueue(114, 514, 1919, 810)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.clear()).toBe(true)
    expect(queue.isEmpty()).toBe(true)

})


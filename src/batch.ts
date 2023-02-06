

export interface Batches<T> {
  batch: T[]
}

export function createBatches<T>(batches: Batches<T>, batchSize = 25) {
  return batches.batch.reduce((eventBatches: Batches<T>[], item: T, eventIndex: number) => {
    const addToCurrentBatch = () => eventBatches[eventBatches.length - 1].batch.push(item)

    const createBatch = () =>
      eventBatches.push({
        batch: [item],
      })

    const shouldUseCurrentBatch = () => eventIndex % batchSize

    shouldUseCurrentBatch() ? addToCurrentBatch() : createBatch()

    return eventBatches
  }, [])
}



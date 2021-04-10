db.index2.insertOne({ title: 'ola', sinopse: 'frse efrse rvs', content: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 1 })

db.index2.insertOne({ title: 'xxx', sinopse: 'ola frse efrse rvs', content: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 2 })

db.index2.insertOne({ title: 'xxx', sinopse: 'frse efrse rvs', content: 'ola Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 3 })

db.index2.insertOne({ title: 'ola', sinopse: 'ola frse efrse rvs', content: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 4 })

db.index2.insertOne({ title: 'ola', sinopse: 'ola frse efrse rvs', content: 'ola Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 5 })

db.index2.insertOne({ title: 'xxx', sinopse: 'ola frse efrse rvs', content: 'ola Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 6 })

db.index2.insertOne({ title: 'ola', sinopse: 'frse efrse rvs ola', content: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 7 })

db.index2.insertOne({ title: 'xxx', sinopse: 'ola frse efrse rvs', content: 'ola Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple ola indexes to support a sort operation if the sort uses the same indexes as the query predicate.', number: 8 })

db.index2.insertOne({ title: 'xxx', sinopse: 'ola frse efrse rvs', content: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields. MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate. ola', number: 9 })

db.index.createIndex({ title: 1, sinopse: 1, content: 1 })
// db.index.dropIndex()
db.index.find({ $text: { $search: 'ola' } })



db.index4.insertOne({
  title: 'ola',
  sinopse: 'frse efrse rvs',
  content: [
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
    {
      src: 'imagem',
    },
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
  ],
  number: 1 })

db.index4.insertOne({
  title: 'xxx',
  sinopse: 'ola frse efrse rvs',
  content: [
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
    {
      src: 'imagem',
    },
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
  ],
  number: 2 })

db.index4.insertOne({
  title: 'xxx',
  sinopse: 'frse efrse rvs',
  content: [
    {
      htmlJson: [
        { text: 'ola Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
    {
      src: 'imagem',
    },
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
  ],
  number: 3 })

db.index4.insertOne({
  title: 'xxx',
  sinopse: 'ola frse efrse ola rvs',
  content: [
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
    {
      src: 'imagem',
    },
    {
      htmlJson: [
        { text: 'Since indexes contain ordered records, MongoDB can obtain the results of a sort from an index with which includes the sort fields.' },
        { text: ' ' },
        { text: 'MongoDB may use multiple indexes to support a sort operation if the sort uses the same indexes as the query predicate.' },
      ],
    },
  ],
  number: 5 })

const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
    const listWithThreeBlogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '3466h34o36634j3h2656i3',
            title: 'testiotsikko1',
            author: 'testikirjoittaja1',
            url: 'otsikko1',
            likes: 12,
            __v: 0
        },
        {
            _id: '3453436253o23i5j23o52j3o5i',
            title: 'testiotsikko2',
            author: 'testikirjoittaja2',
            url: 'otsikko2',
            likes: 0,
            __v: 0
        }
      ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })
    test('when list has multiple blogs equals the sum of all likes', () => {
        const result = listHelper.totalLikes(listWithThreeBlogs)
        expect(result).toBe(17)
    })
    test('empty array equals 0', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
  })
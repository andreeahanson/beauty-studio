import { fetchMakeup } from './apiCalls';


describe('apiCalls', () => {
  describe('fetchMakeup', () => {
    let mockMakeup;

    beforeEach(() => {
      mockMakeup = {results: [{"product": "A"}, {"product":"B"}]}

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMakeup)
        })
      })
    })

    it('should be called with the correct URL', () => {
      const expected1 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush'
      const expected2 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer'
      const expected3 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow'
      const expected4 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow'
      const expected5 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner'
      const expected6 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner'
      const expected7 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick'
      const expected8 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation'
      const expected9 = 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara'
      
      fetchMakeup()
      
      expect(window.fetch).toHaveBeenCalledWith(expected1)
      expect(window.fetch).toHaveBeenCalledWith(expected2)
      expect(window.fetch).toHaveBeenCalledWith(expected3)
      expect(window.fetch).toHaveBeenCalledWith(expected4)
      expect(window.fetch).toHaveBeenCalledWith(expected5)
      expect(window.fetch).toHaveBeenCalledWith(expected6)
      expect(window.fetch).toHaveBeenCalledWith(expected7)
      expect(window.fetch).toHaveBeenCalledWith(expected8)
      expect(window.fetch).toHaveBeenCalledWith(expected9)
    })

    it('HAPPY: should return with a parsed response', async () => {
      const result = await fetchMakeup();

      expect(result).toEqual(mockMakeup);
    })

    it('SAD: should return an error if the answer is not ok', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(fetchMakeup()).rejects.toEqual(Error('Error uploading makeup, response not ok'))
    })

  });
})
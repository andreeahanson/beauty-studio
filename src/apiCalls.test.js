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

      fetchMakeup('blush')
      
      expect(window.fetch).toHaveBeenCalledWith(expected1)
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
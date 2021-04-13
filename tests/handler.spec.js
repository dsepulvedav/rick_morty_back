const handler = require('../handler')

describe('Handler Tests', () => {

  it('correct output is generated when firing without page parameter', async () => {
    const mockEvent = {}
    const output = await handler.getEpisodeLocations(mockEvent)
    expect(output).toHaveProperty('body')
    const body = JSON.parse(output.body)
    expect(body).toHaveProperty('ok', true)
    expect(body).toHaveProperty('episodes')
    expect(body).toHaveProperty('next')
  })

  it('correct output is generated when firing with page parameter = 2', async () => {
    const mockEvent = { pathParameters: { page: 2 }}
    const output = await handler.getEpisodeLocations(mockEvent)
    expect(output).toHaveProperty('body')
    const body = JSON.parse(output.body)
    expect(body).toHaveProperty('ok', true)
    expect(body).toHaveProperty('episodes')
    expect(body).toHaveProperty('next')
  })

  it('correct output is generated when firing with page parameter = 3', async () => {
    const mockEvent = { pathParameters: { page: 3 }}
    const output = await handler.getEpisodeLocations(mockEvent)
    expect(output).toHaveProperty('body')
    const body = JSON.parse(output.body)
    expect(body).toHaveProperty('ok', true)
    expect(body).toHaveProperty('episodes')
    expect(body.next).toBeNull()
  })

  it('error output is generated when firing with invalid page parameter', async () => {
    const mockEvent = { pathParameters: { page: 30 }}
    const output = await handler.getEpisodeLocations(mockEvent)
    expect(output).toHaveProperty('body')
    const body = JSON.parse(output.body)
    expect(body).toHaveProperty('ok', false)
  })
})


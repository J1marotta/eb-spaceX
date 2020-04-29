export const initialState = 
  {  
    capsules: [],
    landingId: 'LZ-4',
    landingpad: [
      {'Welcome': 'You can use the buttons below to fetch from the SpaceX api',
        'Capsules': 'The Capsules button will collect all the upcoming capsules',
        'LandingId': 'Landing Id is used to get particular landingPad, you can leave blank to fetch all of them.'
      }
    ]
}

export const initialMeta = { loading: false, isError: false, error: null }

export default initialState
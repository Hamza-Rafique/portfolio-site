const review = [
    {
        id: 14,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Hamza is a hidden gem on Fiverr. Highly recommend!',
        reviewTime: '5 days ago',
      },
      {
        id: 15,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Working with Hamza is always a pleasure!',
        reviewTime: '3 weeks ago',
      },
      {
        id: 16,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Hamza was a pleasure to work with. His code expertise and quick delivery was very appreciated.',
        reviewTime: '1 month ago',
      },
      {
        id: 17,
        clientName: 'dignifiedbimpe',
        clientLocation: 'United Kingdom',
        clientSource: 'Fiverr',
        clientReview: 'Very good work',
        reviewTime: '1 month ago',
      },
      {
        id: 18,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: "Very impressed with Hamza's work!",
        reviewTime: '1 month ago',
      },
      {
        id: 19,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Once again the seller produced high quality components.',
        reviewTime: '1 month ago',
      },
      {
        id: 20,
        clientName: 'lilyc1129',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Hamza is a very knowledgeable developer. He was able to quickly and effectively answer my storybook questions. Looking forward to working with him again!',
        reviewTime: '1 month ago',
      },
      {
        id: 21,
        clientName: 'craigbradley954',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Great work thank you!',
        reviewTime: '2 months ago',
      },
    {
        id: 0,
        clientName: 'craigbradley954',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Great work thank you!'
    },
    {
        id: 1,
        clientName: 'naveed_shahid',
        clientLocation: 'Pakistan',
        clientSource: 'Fiverr',
        clientReview: 'Hamza was excellent at fixing React/Next.js bugs. They were knowledgeable, efficient, and communicated well. Highly recommend!'
    },
    {
        id: 2,
        clientName: 'naveed_shahid',
        clientLocation: 'Pakistan',
        clientSource: 'Fiverr',
        clientReview: 'Hamza\'s contributions to the development were outstanding, demonstrating exceptional attention to detail and a level of professionalism that went above and beyond expectations.'
    },
    {
        id: 3,
        clientName: 'craigbradley954',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Hamza helped us work through some difficult UI / UX issues and was a huge help! I would recommend him for sure!'
    },
    {
        id: 4,
        clientName: 'darth_vader_198',
        clientLocation: 'Singapore',
        clientSource: 'Fiverr',
        clientReview: 'Hamza truly impressed me with his professionalism and exceptional documentation, EXCEEDING all my expectations. Highly recommend! 👍'
    },
    {
        id: 5,
        clientName: 'darth_vader_198',
        clientLocation: 'Singapore',
        clientSource: 'Fiverr',
        clientReview: 'Rafique\'s work in storybook development was impeccable, showcasing remarkable attention to details and professionalism. Beyond the top-notch delivery, working with Hamza was a pleasure.'
    },
    {
        id: 6,
        clientName: 'tapplix',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Hamza was amazing to work with and his work was quick! I am very satisfied.'
    },
    {
        id: 7,
        clientName: 'roniy1985',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Top quality service! Clean code and very quick responses. Pleasure working with him.'
    },
    {
        id: 8,
        clientName: 'roniy1985',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Love the new designs of my app!!! Hamza and his team are very talented!!'
    },
    {
        id: 9,
        clientName: 'xotonymous',
        clientLocation: 'France',
        clientSource: 'Fiverr',
        clientReview: 'Great to work with!'
    },
    {
        id: 10,
        clientName: 'haha0101',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Wow, Hamza went above and beyond with my order. I highly recommend working with him for all your projects!'
    },
    {
        id: 11,
        clientName: 'kppsemp001',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Good seller. Addressed all concerns and delivered exactly what I needed on time.'
    },
    {
        id: 12,
        clientName: 'abdulrahmannn99',
        clientLocation: 'Qatar',
        clientSource: 'Fiverr',
        clientReview: 'A great work done, highly recommended.'
    },
    {
        id: 13,
        clientName: 'natede',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Work was completed in a timely manner.'
    }
];

export default function handler(req, res) {
    res.status(200).json(review)
}

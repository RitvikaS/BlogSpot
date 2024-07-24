const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    about: ` In 2001, Leslie moved from Michigan to New York City with an
    English degree and love of magazines. After spending an
    accidental year in law school, she wrote and edited for many
    magazines, including Glamour and New York. In 2007, Leslie began
    Cup of Jo as a weekend hobby, but then developed it into the
    award-winning daily website it is today — with a deeply engaged
    readership, thought-leading essays, and a diverse team of
    writers, photographers and contributors. In fall 2023, she also
    launched a weekly Substack newsletter, Big Salad, which became
    an instant bestseller. Leslie lives with her two chatty boys and
    a hamster in Brooklyn. Email her at hello@cupofjo.com or find
    her on Instagram.`,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Henry",
    role: "FOUNDER & EDITOR",
    about: `Michael has always loved talking to people and hearing their
    stories. After graduating with a journalism degree, she wrote on
    the marketing teams of various tech companies. But she would
    always find time to write for her personal blog, Kinsisters,
    which features personal essays, travel recommendations and life
    realizations. In November 2021, she began working for Cup of Jo
    and quickly become an invaluable part of the team. Michael
    lives in the Bay Area with her husband and two children. Say
    hello at Michael@cupofjo.com or follow her on Instagram.`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s",
  },
  {
    name: "Michael Foster",
    role: "PARTNERSHIPS & GROWTH DIRECTOR",
    about: `Shortly after college, Michael moved to New York to pursue a
    career in digital marketing, despite her parents’ skepticism
    that people would ever “buy stuff on the internet.” Since then
    she has helped grow online sales at companies like L’Oreal and
    Madewell. Before joining Cup of Jo, she was driving traffic and
    maximizing ROI on the performance marketing team at J.Crew.
    Michael lives in Seattle with her husband, daughter and cat. You
    can reach out to her for partnership and affiliate opportunities
    at Michael@cupofjo.com or say hello on Instagram.`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
  },
  {
    name: "Dries Vincent",
    role: "NEWSLETTER EDITOR",
    about: `Vincent is the newsletter editor for Cup of Jo’s weekly
    Substack, Big Salad. Her essays on mothering and the climate
    crisis have appeared in Orion, Catapult, and elsewhere. She has
    won essay prizes from Fourth Genre and Prairie Schooner. She
    lives with her spouse and two kids in western Washington, where
    she enjoys hanging out at the beach and taking family bike
    rides. Get in touch at Vincent@cupofjo.com or find her on
    Instagram.`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6zq21NVsOxQs4PL4rJU30aiCXEkVrwB-Y19RYowqhUGklgM3SNfj6e-L1UU3mfuyByM&usqp=CAU",
  },
  {
    name: "Lindsay Walton",
    role: "PHOTOGRAPHER",
    about: `Lindsay first picked up a camera at age nine, but it wasn’t
    until many years after college that she realized that
    photography was it. She is now a commercial and editorial
    photographer specializing in lifestyle, portraits and food, with
    clients such as Pepsi, Shake Shack, The Kitchn and of course,
    Cup of Jo. Her work has taken her all over the world, as far as
    India and Uganda. When photographing people, especially women,
    she loves to draw out their inherent beauty and be at ease. She
    is always drawn to beautiful light and real connection. You can
    see her work here and on Instagram.`,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU",
  },
];

export function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0 border-b border-gray-200 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Blog-Spot
          </h2>
          <div className="mt-2 text-lg leading-8 text-gray-600 p-16">
            <p>
              Founded in January 2007, Blog Spot is a blog reading as well
              posting site that covers style, culture, food, travel,
              relationships and parenting, etc.
            </p>
            <p>
              Known industry wide for its large and deeply engaged readership,
              Blog Spot encourages visitors to "come for the blog, stay for the
              comments."
            </p>
            <p>
              The site receives over 4 million monthly page views and almost 1
              million monthly unique visitors. Blog Spot regularly donates a
              percentage of profits to organizations we support, including
              RAICES, NAACP, NARAL, Greenpeace, Save the Children, Planned
              Parenthood, the Lilith Fund and The Florence Project. These also
              include unfiltered adventures, musings and stories.
            </p>
            <p>We’re glad you are here. Thank you so much for reading.</p>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"> */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
              <p
                className="text-gray-600"
                style={{ margin: "2rem 1rem 2rem 0" }}
              >
                {person.about}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

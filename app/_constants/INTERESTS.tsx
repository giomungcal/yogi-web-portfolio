interface INTERESTS {
  title: string;
  content: string;
  media: JSX.Element | string;
}

export const INTERESTS: INTERESTS[] = [
  {
    title: "vlogging",
    content:
      "since i was a kid, taking videos of random things has been something i enjoyed. i almost took up film as a course in college but decided otherwise. now, i return to it as a hobby whenever I travel.",
    media: (
      <iframe
        style={{
          width: "100%",
          height: "210px",
        }}
        src="https://www.youtube.com/embed/4GYHbqslFL4?si=X3TygJ8KdWLlfCeM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "drag & fashion",
    content:
      "i'm a hugeeee fan of everything drag/fashion related. earlier this year, i developed a passion for fashion designing and decided to start studying at a local fashion school on weekends. however, i paused my studies to focus on learning coding.",
    media: "/assets/images/drag-fashion-banner.png",
  },
  {
    title: "gaming",
    content:
      "i'm a big console gamer, having owned a psp in my teen years, a ps4, and recently a ps5. i've played a wide range of games, from chill ones like harvest moon and stardew valley to challenging games like monster hunter and final fantasy, as well as extreme titles like bloodborne, sekiro, elden ring.",
    media: "/assets/images/gaming.png",
  },
  {
    title: "badminton",
    content:
      "a sport that i recently picked up, found that i really enjoyed it and now it's been one of my go to hobbies. kinda regret not starting to play it at an earlier age though.",
    media: "/assets/images/badminton.png",
  },
];

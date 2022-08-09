import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Ricardo Castanho",
  description: "Meu incrível Blog.",
  author: "Ricardo Castanho",
  avatar: "./me.jpeg",
  avatarClass: "rounded-full",
  favicon: "./deno.svg",
  lang: "pt",
  theme: "auto",
  links: [
    { title: "Email", url: "mailto:ricardosoares632@gmail.com" },
    { title: "GitHub", url: "https://github.com/ricardocastanho" },
  ],
});

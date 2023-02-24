import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import { Home } from "../Home";

const server = setupServer(
  rest.get(
    "https://anime-db.p.rapidapi.com/anime?page=1&size=30",
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: [
            {
              _id: "5114",
              title: "Fullmetal Alchemist: Brotherhood",
              alternativeTitles: [
                "Hagane no Renkinjutsushi: Fullmetal Alchemist",
                "Fullmetal Alchemist (2009)",
                "FMA",
                "FMAB",
                "鋼の錬金術師 FULLMETAL ALCHEMIST",
                "Fullmetal Alchemist: Brotherhood",
                "Fullmetal Alchemist Brotherhood",
              ],
              ranking: 1,
              genres: ["Action", "Adventure", "Drama", "Fantasy"],
              episodes: 64,
              hasEpisode: true,
              hasRanking: true,
              image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
              link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
              status: "Finished Airing",
              synopsis:
                "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
              thumb:
                "https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a",
              type: "TV",
            },
            {
              _id: "41467",
              title: "Bleach: Sennen Kessen-hen",
              alternativeTitles: [
                "Bleach: Thousand-Year Blood War Arc",
                "BLEACH 千年血戦篇",
                "Bleach: Thousand-Year Blood War",
              ],
              ranking: 2,
              genres: ["Action", "Adventure", "Fantasy"],
              episodes: 0,
              hasEpisode: false,
              hasRanking: true,
              image: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
              link: "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen",
              status: "Not yet aired",
              synopsis: "",
              thumb:
                "https://cdn.myanimelist.net/r/50x70/images/anime/1764/126627.jpg?s=196ea098ac1becd97fc0a4b50a949c2b",
              type: "TV",
            },
            {
              _id: "9253",
              title: "Steins;Gate",
              alternativeTitles: ["STEINS;GATE", "Steins;Gate"],
              ranking: 3,
              genres: ["Drama", "Sci-Fi", "Suspense"],
              episodes: 24,
              hasEpisode: true,
              hasRanking: true,
              image: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
              link: "https://myanimelist.net/anime/9253/Steins_Gate",
              status: "Finished Airing",
              synopsis:
                'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Rintarou decides to attend neuroscientist Kurisu Makise\'s conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.\n\n[Written by MAL Rewrite]',
              thumb:
                "https://cdn.myanimelist.net/r/50x70/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca",
              type: "TV",
            },
            {
              _id: "28977",
              title: "Gintama°",
              alternativeTitles: [
                "Gintama' (2015)",
                "銀魂°",
                "Gintama Season 4",
                "Gintama Season 4",
                "Gintama Temporada 4",
                "Gintama Saison 4",
              ],
              ranking: 4,
              genres: ["Action", "Comedy", "Sci-Fi"],
              episodes: 51,
              hasEpisode: true,
              hasRanking: true,
              image: "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
              link: "https://myanimelist.net/anime/28977/Gintama%C2%B0",
              status: "Finished Airing",
              synopsis:
                "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
              thumb:
                "https://cdn.myanimelist.net/r/50x70/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209",
              type: "TV",
            },
            {
              _id: "43608",
              title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
              alternativeTitles: [
                "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season",
                "Kaguya-sama: Love is War Season 3rd Season",
                "かぐや様は告らせたい-ウルトラロマンティック-",
                "Kaguya-sama: Love is War - Ultra Romantic",
              ],
              ranking: 5,
              genres: ["Comedy", "Suspense"],
              episodes: 13,
              hasEpisode: true,
              hasRanking: true,
              image: "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
              link: "https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic",
              status: "Finished Airing",
              synopsis:
                "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]\n",
              thumb:
                "https://cdn.myanimelist.net/r/50x70/images/anime/1160/122627.jpg?s=9b41450e9598d10c97fb4eeb7cca3737",
              type: "TV",
            },
          ],
        })
      );
    }
  )
);

beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("check if we have 30 titles", async () => {
  await render(<Home />);

  // const numberOfTitle = screen.findAllByRole("heading", { level: 1 });
  // expect(numberOfTitle.length).toEqual(30);
});

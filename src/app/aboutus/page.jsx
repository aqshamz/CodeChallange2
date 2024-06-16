"use client";
import Image from "next/image";
import { useState } from "react";

export default function Aboutus(){
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return(
        <>
            <section className="relative h-screen bg-gray-900 text-white flex items-center">
                <Image
                    src="/Office2.avif"
                    alt="Office Bg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right"
                    quality={100}
                    className="z-0"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
                <div className="container mx-auto relative z-20">
                    <div className="max-w-xl text-left">
                        <h4 className="text-4xl font-bold mb-4">About Us</h4>
                    </div>
                </div>
            </section>

            <section className=" py-20">
                <div className="container mx-auto text-left">
                    <h2 className="text-2xl font-bold mb-8">Since its Formula 1 debut in 2005, Oracle Red Bull Racing’s mission can be encapsulated in one simple phrase – to win and to do it differently.</h2>
                    <p className="text-lg mb-8">
                        Born from Red Bull founder Dietrich Mateschitz’s desire to disrupt the status quo in F1 and to bring back the swashbuckling spirit of grand prix racing’s golden age, 
                        the Team established itself as a maverick force that played hard off track but worked even harder on it. 
                        And with Christian Horner as the sport’s youngest team principal, Red Bull Racing made an immediate impression.
                    </p>
                    <p className="text-lg mb-8">
                        On its debut at the 2005 Australian Grand Prix, the Team scored a double points finish, with David Coulthard finishing fourth and rookie Christian Klien crossing the line in seventh place.
                    </p>
                    
                    {/* read more */}
                    {showMore && (
                        <>
                            <p className="text-lg mb-8">
                                The Team went on to finish comfortably mid-table in both 2005 and the following year scored its first podium finish, with Coulthard driving the RB2 to third place at the Monaco Grand Prix.                        
                            </p>
                            <p className="text-lg mb-8">
                                For 2007, Mark Webber came onboard to join DC and at the European Grand Prix, the Australian scored his first podium finish with the team. His third place at the Nürburging helped the team to fifth place in the Constructors’ standings. The following year saw the Team slide to seventh overall but 2009 brought a major shift in the regulations and the Team’s fortunes.
                            </p>
                            <p className="text-lg mb-8">
                                David Coulthard retired at the end of 2008 to be replaced by Sebastian Vettel. Seb’s arrival coincided with a major reset in the sport’s aerodynamic regulations. The new rules gave the technical team the chance to shine and with the RB5, they produced a winner: Vettel took Red Bull Racing’s first victory, leading home Webber in a 1-2 finish at the Chinese Grand Prix. The car would win five more times in 2009, including Webber’s debut F1 victory at the Nürburgring. The team finished second in the Constructors’ Championship but, perhaps more significantly, it won the final three races of the season.
                            </p>
                            <p className="text-lg mb-8">
                                History was made in 2010. Driving the RB6, Webber and Vettel were title contenders from the start. Their consistent podium finishes secured the Constructors’ Championship at the penultimate round in Brazil. Both drivers went to the final race in Abu Dhabi with a shot at the Drivers’ crown. Vettel emerged triumphant, winning the race to become the sports’ youngest ever World Champion. A record that still stands.
                            </p>
                            <p className="text-lg mb-8">
                                The RB7 and Vettel dominated 2011. The German driver took 11 of the team’s dozen victories and won his second Drivers’ title with four races to spare. The Constructors’ title was confirmed with three races remaining.
                            </p>
                            <p className="text-lg mb-8">
                                The battle was closer in 2012 but once again the Team won the development battle and clinched both titles once again: the Constructors’ title at the penultimate race in Austin and the Drivers’ title, again with Vettel, at a dramatic season finale in Brazil.
                            </p>
                            <p className="text-lg mb-8">
                                The 2013 saw Vettel add another record to his list as he went on second-half rampage, taking a record nine consecutive victories to secure both titles at the Indian Grand Prix, with three races to spare.
                            </p>
                            <p className="text-lg mb-8">
                                The 2014 season saw reality bite as the new hybrid power units heralded a change. Saddled with a horsepower deficit the RB10 lacked the competitive edge enjoyed by its predecessors. Nevertheless, the car was still good enough to provide newcomer Daniel Ricciardo with his first, second and third Formula One victories and the Australian finished third in the Drivers’ Championship while the team was second in the Constructors’.
                            </p>
                            <p className="text-lg mb-8">
                                Sebastian Vettel departed at the end of 2014 to be replaced by Daniil Kvyat, though 2015 was a rare winless season for Red Bull Racing as it dropped to fourth overall.
                            </p>
                            <p className="text-lg mb-8">
                                Things improved in 2016, however. The team again finished second in the Constructors’ Championship and Ricciardo was third in the Drivers’ table again. The name on everyone’s lips, however, was that of Max Verstappen. The young Dutchman was promoted from Toro Rosso to replace Kvyat after four races of the season and he got off to the best start possible, winning his first race at the Spanish Grand Prix. Ricciardo added a second victory in Malaysia.
                            </p>
                            <p className="text-lg mb-8">
                                Still hampered by a lack of power, the following two years were again tough, though they were regularly punctuated by hard-earned wins that took the Team to consecutive third-place finishes in the Constructors’ Championship.
                            </p>
                            <p className="text-lg mb-8">
                                Change, however, was on the way. For 2019, the Team ended an 11-year association with Renault and partnered with Honda for its power unit supply and Pierre Gasly arrived in place of the departing Ricciardo. Max took a first Honda-powered victory at the Team’s home event at the Red Bull Ring in Austria, followed it with victory on a wet day in Hockenheim for the German Grand Prix and took a third win of the season in Brazil, as the Team, now with Alex Albon racing alongside Max, finished the campaign in third place overall. 
                            </p>
                            <p className="text-lg mb-8">
                                The 2020 was delayed due to the COVID-19 pandemic and a 17-race schedule eventually began in July. Once Max again led the way for the Team and he finished the season with 12 podium finishes, including victory in the 70th Anniversary Grand Prix at Silverstone and at the season finale in Abu Dhabi.
                            </p>
                            <p className="text-lg mb-8">
                                The latter provided a boost going into an unusual off-season in which wholesale changes to the car were prohibited. There was, however, a shift in the driver line-up with Sergio ‘Checo’ Pérez coming in and Alex Albon stepping back to become our Test and Reserve Driver. 
                            </p>
                            <p className="text-lg mb-8">
                                The RB16B proved competitive from the start. In what became a hard-fought campaign, Max took his first victory of the season at Imola. Nine more followed to take the season to a nail-biting finale at the season-ending Abu Dhabi Grand Prix, where in dramatic circumstances Max took a last-lap victory to seal the Drivers’ Championship. Checo, meanwhile, took a first victory for Team, at a hectic Azerbaijan Grand Prix, helping the team to second in the Constructors’ Championship.
                            </p>
                            <p className="text-lg mb-8">
                                Red Bull Racing’s first title since 2013 closed the book on a core set of rules dating back to the start of the hybrid era and in 2022 the sport introduced the largest change to the technical regulations seen in four decades. A new era of ground effect cars began and the Oracle Red Bull Racing RB18 led the way.
                            </p>
                            <p className="text-lg mb-8">
                                Max took victory at Round 2 in Saudi Arabia and after that the Team couldn’t stop winning, with a staggering 16 more wins followed over the course of the next 20 races. Checo picked up a brace of stirring street race wins, in Monaco and Singapore, but the championship belonged to Max. On his way to his second Drivers’ title the Dutchman set a new record for wins in a single season with 15 and racked up the largest points total ever recorded for a season with 454. In all, Max and Checo stood on the podium 28 times during 2022 and the 759 points they took earned the Team its fifth Constructors’ title.
                            </p>
                            <p className="text-lg mb-8">
                                The RB18 has given the Team a winning platform for the next phase of Formula 1 competition and with its successor already providing even more victories, the future looks bright.
                            </p>
                        </>
                    )}
                    <div className="flex justify-center">
                        <button
                            onClick={toggleShowMore}
                            className="bg-gray-900 text-white px-6 py-3 rounded-lg border-2 hover:bg-gray-700 transition duration-300"
                        >
                            {showMore ? 'Hide' : 'Read More'}
                        </button>
                    </div>
                    {/* read more */}
                </div>
            </section>
        </>
    )
}
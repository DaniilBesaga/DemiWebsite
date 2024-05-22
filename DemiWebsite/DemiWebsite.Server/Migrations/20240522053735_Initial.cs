﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DemiWebsite.Server.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    news_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    news_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    post_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    img_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.news_id);
                });

            migrationBuilder.CreateTable(
                name: "Works",
                columns: table => new
                {
                    work_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    work_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    release_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    img_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    trailer_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    story = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Works", x => x.work_id);
                });

            migrationBuilder.InsertData(
                table: "News",
                columns: new[] { "news_id", "description", "img_url", "news_name", "post_date" },
                values: new object[,]
                {
                    { 1, "The long-awaited official original artwork collection for the TV anime \"Vivy -Fluorite Eye's Song-\" will be released on Saturday, May 18, 2024 by WIT STUDIO, the animation production company!\r\nIn addition to teaser/key visuals, it is packed with approximately 500 original character cuts! It also includes a special page focusing on the unique \"A.I Special Effects\" technique used in this work.\r\nLet's look back on Vivi's 100-year journey together through the original artwork.\r\nThis is a must-have book for fans who want to fully enjoy \"Vivy -Fluorite Eye's Song-\".", "https://profirealt.blob.core.windows.net/commerce/news/pic1.jpg", "\"Vivy -Fluorite Eye's Song- Original Art Book\" to be released!!", new DateTime(2024, 2, 12, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "We are now accepting applications for student interns for those graduating in 2025! !\r\nFollowing on from last year, we are now accepting applications for student interns.\r\n\r\nOur company has decided to encourage mutual understanding between applicants and the company by having them experience the anime production site as an intern, and to hire people who truly want to work in an anime studio.\r\n\r\nThe anime industry, like other industries, is a wonderful environment with many opportunities for growth.\r\n\r\nThere are many industries and occupations in the world, but the animation environment is an environment that condenses the fun of team creativity.\r\n\r\nIf you loved school festivals and club activities in your school days, or if you want to cherish the experience of creating something yourself, or if you feel that this recruitment article is appealing to you, please feel free to apply.", "https://profirealt.blob.core.windows.net/commerce/news/pic3.png", "Production Assistant Position] Online company information session to be held!", new DateTime(2024, 4, 12, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, "We are now recruiting for part-time scanning staff.\r\nWe welcome those who live near Musashino City and can work long term!\r\nIn order to fill vacancies, there are designated days and times. Please be careful.\r\n\r\nPlease check the details below.", "https://profirealt.blob.core.windows.net/commerce/news/pic3.png", "Part-time job recruitment announcement", new DateTime(2024, 5, 22, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, "We have prepared special drinks for the fan meeting to be held at Asagaya Loft A☆彡\r\nThis year, we will also have non-alcoholic drinks available!!\r\nTickets are available until 6pm tonight! Don't miss out on this opportunity...!\r\nCustomers who order a collaboration drink will receive a random gift of a \"2023 calendar illustration sticker + secret (7 types in total)\"! *This is a limited edition, so don't miss out!", "https://profirealt.blob.core.windows.net/commerce/news/pic2.jpg", "Information on special drinks with benefits at \"WIT STUDIO Presents Fan Meeting 2023\"", new DateTime(2023, 12, 12, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, "The official setting material collection for the TV anime \"SPY×FAMILY\", \"SPY×FAMILY ANIMATIION ART BOOK\", will be released on Friday, December 8th!\r\n\r\nThe long-awaited art book containing about 300 setting materials used in the TV anime \"SPY×FAMILY\" is now available!\r\n\r\nFrom the rich expressions and costume settings of characters including Anya, to prop settings, art settings and art boards for the Forger family and Eden School, we deliver a large volume of 200 pages in full color!\r\n\r\nIn addition, it features a fun quiz using newly drawn illustrations and settings, and the entire storyboards for the opening of the second season by Tetsuro Araki and the ending by Takayuki Hirao. It also includes a \"Until Anime is Made\" page that thoroughly explains how animation is made.", "https://profirealt.blob.core.windows.net/commerce/news/pic4.jpg", "\"SPY×FAMILY ANIMATION ART BOOK\" to be released and preorders now open!!", new DateTime(2024, 5, 22, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 6, "〇Recruitment period\r\nMonday, May 13, 2024 - Friday, May 31, 2024 (must arrive by this date)\r\nMid-June: Document screening/interview\r\nLate June: Offer notification\r\n\r\n〇Salary\r\nMonthly 210,000 yen or more (including fixed overtime pay) *Negotiable based on the individual's experience\r\nCommuting allowance (up to 15,000 yen per month)\r\n\r\n☆About the address☆\r\nPlease be sure to write \"New Projects/Mid-Career Recruitment\" in the address or email subject line!\r\n\r\n―Details―\r\nIf you are interested, please check the recruitment details below.", "https://profirealt.blob.core.windows.net/commerce/news/pic3.png", "Demi Studio is currently recruiting for a production assistant position in connection with the launch of a new project!", new DateTime(2024, 5, 12, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Works",
                columns: new[] { "work_id", "img_url", "work_name", "release_date", "story", "trailer_url" },
                values: new object[,]
                {
                    { 1, "https://profirealt.blob.core.windows.net/commerce/works/work2.jpg", "Spy Family", new DateTime(2024, 3, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "In an era when countries around the world were engaged in a fierce information war under the surface.\r\n\r\nLloyd Forger, known as Twilight, a skilled spy agent of the East Division of the Intelligence Agency of Westalis, WISE, was on a regular mission when he received an order to change the person in charge of the ongoing Operation Strix.\r\n\r\nHowever, the person chosen to take the new role was an incompetent man.\r\n\r\nAt that time, a cooking class was being held at Eden School, and it was rumored that the winner would be awarded the Star Stella. In order to show some progress in Operation Strix and negotiate with WISE to continue the mission, and ultimately to protect world peace, Lloyd suggested to Anya that they make Melemele, a traditional sweet from the \"Frizis region,\" which is the favorite food of the principal, who is the head judge. To experience the authentic taste, the Forger family decided to go on a family trip to Frizis. Meanwhile, before departure, Yoru witnesses the entire exchange between Lloyd and the mysterious woman, and the family trip begins with a hint of unease about their tentative relationship...\r\n\r\nDuring the family trip, Anya discovers a suspicious suitcase on the train. For some reason, there is chocolate inside... While wondering what it is, the owner of the suitcase returns, and in her surprise, Anya accidentally swallows the chocolate... However, the chocolate contains a major secret that could shake up world peace!", "https://www.youtube.com/watch?v=Hlw8dTz_iq0" },
                    { 2, "https://profirealt.blob.core.windows.net/commerce/works/work1.png", "This is what happened", new DateTime(2024, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Torako Koshi is a high school girl attending Tokyo Metropolitan Hinominami High School.\r\n\r\nOne day, while walking to school, she felt something cold touch her face.\r\n\r\nWhen she looked up, she saw a girl with a runny nose and a horn stuck in an electric wire, unable to move――!?\r\n\r\nWhen she accidentally helps Kanoko, a girl with a strange \"horn\",\r\nTorako Koshi's life as an honor student (in disguise) is thrown into disarray...\r\n\r\nA girl (a former delinquent) meets a deer (?)\r\nThe Girl Meets Deer story begins!!\r\n\r\nBroadcasting starts on TOKYO MX / BS Nippon TV every Sunday from 23:30 from July 7th!\r\n\r\n*Schedule subject to change.", "https://www.youtube.com/watch?v=ITFklIWu0Wg" },
                    { 3, "https://profirealt.blob.core.windows.net/commerce/works/work3.jpg", "The One Piece", new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Foosha Village is located on the edge of the East Blue.\r\n\r\nA village boy, Monkey D. Luffy, eats a Devil Fruit and becomes a Rubber Man, whose body stretches like rubber!\r\n\r\nAfter meeting the great pirate Shanks, Luffy dreams of becoming a pirate himself.\r\n\r\nShanks promises Luffy to meet him again at sea, leaves his straw hat behind, and sets sail.\r\n\r\nTen years later, a grown-up Luffy sets out alone on the open sea with an unwavering dream.\r\n\r\n\"I'm going to become the Pirate King!\" he declares loudly.\r\n\r\n*For inquiries about THE ONE PIECE, please contact us using the form below.", "https://www.youtube.com/watch?v=l9dcvNTrocc&t=63s" },
                    { 4, "https://profirealt.blob.core.windows.net/commerce/works/work4.jpg", "Pokémon Scarlet Violet Original", new DateTime(2023, 11, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "What is \"your own treasure\"?\r\n\r\nThe story takes place in the Paldea region, where people and Pokémon live together in a place overflowing with nature.\r\n\r\n\"We would like you to make a video to convey the greatness of the academy to the new students and transfer students.\"\r\n\r\nOne day, three students are approached by the academy's principal, Clavel.\r\n\r\nOhara is a shy girl who is good at the flute but wants to escape the pressure of concerts.\r\n\r\nArikis is a stubborn girl who loves Pokémon battles and is determined to defeat Nemo.\r\n\r\nHoma is a playful girl who is so obsessed with getting an exclusive scoop that she ends up causing trouble for everyone.\r\n\r\nThey are both so consumed with their own concerns that they don't quite get along.\r\n\r\nBut as they grow and face Pokémon, the three gradually begin to come together...", "https://www.youtube.com/watch?v=2oLWQK2VbGg" },
                    { 5, "https://profirealt.blob.core.windows.net/commerce/works/work5.png", "Alylle of Bonds", new DateTime(2022, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "This is a story about girls connected by \"bonds.\"\r\nKizuna AI appeared in the virtual world like a comet and instantly became popular.\r\nAfter winning the top prize in the Virtual Grid Awards, Lapindor, for five consecutive years, she suddenly disappeared.\r\nTime passes and ADEN Academy is a school that specializes in producing talent to thrive in the virtual world.\r\nStudents gather there, each striving to achieve their dreams.\r\n\"I want to be a virtual artist like Ai!\"\r\nMiraku, a girl who admires Kizuna AI, enrolls in ADEN Academy with this wish in her heart.\r\nAnd the people she will meet from now on will also spend their time at the school with various thoughts in mind.", "https://www.youtube.com/watch?v=lbmE9AwMJ-s" },
                    { 6, "https://profirealt.blob.core.windows.net/commerce/works/work6.jpg", "Another World Suicide Squad", new DateTime(2023, 7, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "Harley Quinn, the Joker, and DC Comics villains in an \"other world\"?!\r\nThe Suicide Squad goes on a rampage in ISEKAI!! MUSOU!!\r\nA new original animation from Japan,\r\nthe craziest other-worldly \"violent\" fantasy presented to the world by the strongest lineup, opens in style!!", "https://www.youtube.com/watch?v=TtwBgQ82Pls" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "News");

            migrationBuilder.DropTable(
                name: "Works");
        }
    }
}

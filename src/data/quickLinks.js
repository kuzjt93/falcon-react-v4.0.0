import themewagon from 'assets/img/nav-icons/themewagon.png';
import mailbluster from 'assets/img/nav-icons/mailbluster.png';
import google from 'assets/img/nav-icons/google.png';
import spotify from 'assets/img/nav-icons/spotify.png';
import steam from 'assets/img/nav-icons/steam.png';
import githubLight from 'assets/img/nav-icons/github-light.png';
import discord from 'assets/img/nav-icons/discord.png';
import xbox from 'assets/img/nav-icons/xbox.png';
import trello from 'assets/img/nav-icons/trello.png';
import hp from 'assets/img/nav-icons/hp.png';
import account from 'assets/img/team/3.jpg';
import linkedin from 'assets/img/nav-icons/linkedin.png';
import twitter from 'assets/img/nav-icons/twitter.png';
import facebook from 'assets/img/nav-icons/facebook.png';
import instagram from 'assets/img/nav-icons/instagram.png';
import pinterest from 'assets/img/nav-icons/pinterest.png';
import slack from 'assets/img/nav-icons/slack.png';
import deviantart from 'assets/img/nav-icons/deviantart.png';

export const quickLinks = [
  {
    avatar: account,
    title: 'Account',
    link: `/user/profile`
  },
  {
    img: themewagon,
    title: 'Themewagon',
    link: 'https://themewagon.com/'
  },
  {
    img: mailbluster,
    title: 'Mailbluster',
    link: 'https://mailbluster.com/'
  },
  { img: google, title: 'Google' },
  { img: spotify, title: 'Spotify' },
  { img: steam, title: 'Steam' },
  { img: githubLight, title: 'Github' },
  { img: discord, title: 'Discord' },
  { img: xbox, title: 'xbox' },
  { img: trello, title: 'Kanban' },
  { img: hp, title: 'Hp' },
  { hr: true },
  { img: linkedin, title: 'Linkedin' },
  { img: twitter, title: 'Twitter' },
  { img: facebook, title: 'Facebook' },
  { img: instagram, title: 'Instagram' },
  { img: pinterest, title: 'Pinterest' },
  { img: slack, title: 'Slack' },
  { img: deviantart, title: 'Deviantart' },
  {
    avatarText: 'E',
    title: 'Events',
    link: `/events/event-detail`,
    contentClass: 'bg-soft-primary text-primary'
  }
];

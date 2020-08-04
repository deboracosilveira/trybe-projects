import md5 from 'crypto-js/md5';

const hashMail = (email) => md5(email).toString().toLowerCase().trim();

export default hashMail;

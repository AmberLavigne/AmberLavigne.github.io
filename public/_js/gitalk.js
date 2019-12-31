let url_path = location.pathname;
if (url_path === '/') {
    url_path = 'doc.yujiaxing.com';
}
const gitalk = new Gitalk({
    clientID: '6ac7581b4f805a581f26',
    clientSecret: 'b1d00a970c6996a3a2ef0c1814d4c1d9eda01bf9',
    repo: 'Amberlavigne.github.io',
    owner: 'AmberLavigne',
    admin: ['AmberLavigne'],
    distractionFreeMode: false,
    id: url_path
});
window.commPu = window.commPu || {};
window.commPu.LinkAnimation = function () {
    this.links = document.querySelectorAll('.nav-level-2 a, .block .top .block-title a, .block [itemprop="headline"] a, .block .page-title a, .event-title a, .project-title a, .post-title a, .person-name a, .block-links a, .siblings-navigation li span:first-of-type')
    
    this.createSpan();
};

window.commPu.LinkAnimation.prototype = {
    createSpan: function() {
        this.links.forEach(function (link) {
            link.classList.add('has-animation');
            
            var span = document.createElement('span');
            span.setAttribute('aria-hidden', 'true'); // hide from assistive technologies
            span.classList.add('animated-circle');
            link.appendChild(span);
        });
    }
};

window.addEventListener('load', function () {
    var commPuLinkAnimation = new window.commPu.LinkAnimation();
});

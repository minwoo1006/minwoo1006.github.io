// 1. 네비게이션 부드러운 스크롤 (Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // 헤더 높이만큼 여백을 두고 스크롤
        const headerOffset = 70;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    });
});

// 2. 스크롤 시 페이드인 애니메이션 (Intersection Observer)
// 요소가 화면에 나타날 때 부드럽게 보이도록 처리합니다.
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // 요소가 15% 보일 때 애니메이션 실행
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 한 번 보이면 관찰 중단
        }
    });
}, observerOptions);

// 클래스가 fade-in인 모든 요소를 관찰
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// 3. 스크롤 시 네비게이션 바 그림자 효과 (선택적 시각 효과)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
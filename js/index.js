// 返回顶部
(function () {
    const backtotop = document.querySelector('.btn-backtotop')
    const content = document.querySelector('.content ')
    window.addEventListener('scroll', function () {
        let top = document.documentElement.scrollTop
        let top_d = top > content.offsetTop ? 1 : 0
        backtotop.style.opacity = top_d
    })
    backtotop.addEventListener('click', function () {
        document.documentElement.scrollTop = 0
    })
})();

// 标签 分类页面随机字号，随机颜色
(function () {
    const categories_a = document.querySelectorAll('.categories-a')
    const classtest_link = document.querySelectorAll('.page-content .classtest-link')
    for (let i = 0; i < categories_a.length; i++) {
        const fontSize = parseInt(Math.random() * (24 - 12 + 1)) + 12
        const sizeColor = fonts()
        categories_a[i].style.color = `rgba(${sizeColor})`
        categories_a[i].style.fontSize = `${fontSize}px`
    }

    for (let i = 0; i < classtest_link.length; i++) {
        const fontSize = parseInt(Math.random() * (24 - 12 + 1)) + 12
        const sizeColor = fonts()
        classtest_link[i].style.color = `rgba(${sizeColor})`
        classtest_link[i].style.fontSize = `${fontSize}px`
    }
    function fonts() {
        let sizeColor1 = parseInt(Math.random() * (255 + 1))
        let sizeColor2 = parseInt(Math.random() * (255 + 1))
        let sizeColor3 = parseInt(Math.random() * (255 + 1))
        return `${sizeColor1},${sizeColor2},${sizeColor3}`
    }
})();

// 目录
(function () {

    window.addEventListener('scroll', function () {
        const right_toc = document.querySelector('.right-toc')
        const post_copyright = document.querySelector('.post-copyright')
        let topn = document.documentElement.scrollTop
        if (right_toc) {
            if (topn >= right_toc.offsetTop) {
                right_toc.classList.add('catalogue')
            } else {
                right_toc.classList.remove('catalogue')
            }
            if (topn >= post_copyright.offsetTop - 100) {
                right_toc.classList.remove('catalogue')
            }
        }

    })
})();

// 搜索
(function () {
    const searchInput = document.querySelector('#local-search-input')
    const searchContent = document.querySelector('.local-search-content')
    searchInput.addEventListener('focus', function () {
        searchContent.style.display = 'block'
        setTimeout(function () {
            document.addEventListener('click', handlerClick)
        }, 300)
    })
    function handlerClick(event) {
        let isSelf = searchContent.contains(event.target)
        if (!isSelf) {
            if (searchContent.style.display === 'block') searchContent.style.display = 'none'
        }
        if (searchContent.style.display === 'none') {
            document.removeEventListener('click', handlerClick)
        }
    }
})();
// 导航
(function () {
    const navItem = document.querySelector('.header-nav-items')
    const itemChild = document.querySelectorAll('.header-nav-item-child')
    let timeId = 0
    navItem.addEventListener('mouseover', function (e) {
        clearTimeout(timeId)
        // e.stopPropagation()
        if (e.target.className === 'header-nav-page') {
            // console.log(e.target)
            for (let i = 0; i < itemChild.length; i++) {
                itemChild[i].style.display = 'none'
                clearTimeout(timeId)
            }
            let ea = e.target.nextElementSibling
            ea.style.display = 'block'
        }
    })

    for (let i = 0; i < itemChild.length; i++) {
        clearTimeout(timeId)
        itemChild[i].addEventListener('mouseleave', function () {
            itemChild[i].style.display = 'none'
        })
    }
    navItem.addEventListener('mouseleave', function () {
        clearTimeout(timeId)
        timeId = setTimeout(function () {
            for (let i = 0; i < itemChild.length; i++) {
                itemChild[i].style.display = 'none'
            }
        }, 50)

    })

    const headerNavs = document.querySelector('.header-nav-items')
    headerNavs.addEventListener('click', function (e) {
        if (e.target.tagName === 'SPAN') {
            for (let i = 0; i < itemChild.length; i++) {
                itemChild[i].style.display = 'none'
            }
            let a = e.target.parentNode
            let ul = a.nextElementSibling
            ul.style.display = 'block'
        }
    })

})();

// sidebar
(function () {
    const sidebar = document.querySelector('.sidebar')
    const btn = document.querySelector('.header-nav-fenlei')
    let timeId = 0
    btn.addEventListener('click', function () {
        clearTimeout(timeId)
        if (!document.querySelector('.sidebar-open')) {
            sidebar.classList.add('sidebar-open')
            sidebar.querySelector('.sidebar-content').classList.add('sidebar-content-open')

            document.body.style.position = 'fixed'
            document.body.style.overflow = 'hidden'

            setTimeout(function () {
                document.addEventListener('click', handlerClick)
            }, 300)
        }
    })

    function handlerClick(event) {
        let isSelf = sidebar.querySelector('.sidebar-content').contains(event.target)
        if (!isSelf) {
            // if (searchContent.style.display === 'block') searchContent.style.display = 'none'
            sidebar.classList.remove('sidebar-open')
            sidebar.querySelector('.sidebar-content').classList.remove('sidebar-content-open')

            document.body.style.overflow = 'scroll'
            document.body.style.position = 'relative'

        }
        if (!document.querySelector('.sidebar-open')) {
            document.removeEventListener('click', handlerClick)
        }
    }






})()
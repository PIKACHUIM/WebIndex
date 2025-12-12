/**
 *  现代化导航网站配置
 */
const config = {
    title: "皮卡工具导航",
    subtitle: "一站式工具与资源平台",
    logo_icon: "bolt",
    search: true,
    search_engine: [
        {
            name: "百度",
            template: "https://www.baidu.com/s?wd=$s"
        },
        {
            name: "谷歌",
            template: "https://www.google.com/search?q=$s"
        },
        {
            name: "必应",
            template: "https://www.bing.com/search?q=$s"
        }
    ],
    lists: [
        {
            name: "皮卡工具",
            icon: "tools",
            list: [
                {
                    url: "https://aichat.524228.xyz",
                    name: "AI在线聊天",
                    desc: "智能AI对话工具"
                },
                {
                    url: "https://aidraw.524228.xyz",
                    name: "AI在线画图",
                    desc: "AI图像生成工具"
                },
                {
                    url: "https://ipaddr.524228.xyz",
                    name: "IP地址查看",
                    desc: "查看当前IP地址"
                },
                {
                    url: "https://ittool.524228.xyz",
                    name: "IT工具集合",
                    desc: "各种IT实用工具"
                },
                {
                    url: "https://coding.524228.xyz",
                    name: "皮卡代码站",
                    desc: "代码分享平台"
                },
                {
                    url: "https://linker.524228.xyz",
                    name: "代理订阅站",
                    desc: "代理服务订阅"
                },
                {
                    url: "https://scribe.524228.xyz",
                    name: "订阅生成器",
                    desc: "生成各种订阅链接"
                },
                {
                    url: "https://newssl.524228.xyz",
                    name: "在线证书站",
                    desc: "SSL证书管理工具"
                },
                {
                    url: "https://mailer.524228.xyz",
                    name: "临时邮箱站",
                    desc: "临时邮箱服务"
                },
                {
                    url: "https://images.524228.xyz",
                    name: "随机必应图",
                    desc: "获取随机必应图片"
                },
                {
                    url: "https://photon.524228.xyz",
                    name: "图片处理站",
                    desc: "在线图片处理工具"
                },
                {
                    url: "https://docker.524228.xyz",
                    name: "Docker代理",
                    desc: "Docker镜像代理服务"
                },
                {
                    url: "https://github.524228.xyz",
                    name: "Github代理",
                    desc: "GitHub访问代理"
                },
                {
                    url: "https://onecdn.524228.xyz",
                    name: "Onedrive站",
                    desc: "OneDrive文件管理"
                },
                {
                    url: "https://paints.524228.xyz",
                    name: "PS在线使用",
                    desc: "在线Photoshop工具"
                },
                {
                    url: "https://paster.524228.xyz",
                    name: "在线剪贴板",
                    desc: "在线剪贴板服务"
                },
                {
                    url: "https://search.524228.xyz",
                    name: "在线导航站",
                    desc: "网站导航服务"
                },
                {
                    url: "https://testca.524228.xyz",
                    name: "测试证书CA",
                    desc: "测试证书颁发机构"
                }
            ]
        },
        {
            name: "视频影音",
            icon: "video",
            list: [
                {
                    url: "https://bilibili.com",
                    name: "哔哩哔哩",
                    desc: "B站弹幕视频网站"
                },
                {
                    url: "https://youtube.com",
                    name: "YouTube",
                    desc: "全球最大视频平台"
                },
                {
                    url: "https://y.qq.com",
                    name: "QQ音乐",
                    desc: "腾讯音乐平台"
                },
                {
                    url: "https://music.163.com",
                    name: "网易云音乐",
                    desc: "网易音乐平台"
                },
                {
                    url: "https://shared.pika.net.cn/Mediums/CinemaHD",
                    name: "皮卡电影",
                    desc: "皮卡电影资源"
                },
                {
                    url: "https://forum.gamer.com.tw/",
                    name: "巴哈姆特",
                    desc: "台湾游戏论坛"
                }
            ]
        },
        {
            name: "网盘资源",
            icon: "cloud",
            list: [
                {
                    url: "https://pan.baidu.com",
                    name: "百度网盘",
                    desc: "百度云存储服务"
                },
                {
                    url: "https://123pan.com",
                    name: "123网盘",
                    desc: "123云盘服务"
                },
                {
                    url: "https://yun.139.com",
                    name: "中国移动云盘",
                    desc: "移动云存储服务"
                },
                {
                    url: "https://cloud.189.cn",
                    name: "天翼云盘",
                    desc: "电信云存储服务"
                },
                {
                    url: "https://pan.quark.cn",
                    name: "夸克云盘",
                    desc: "夸克云存储服务"
                },
                {
                    url: "https://shared.pika.net.cn/",
                    name: "皮卡资源中心",
                    desc: "皮卡资源分享中心"
                }
            ]
        },
        {
            name: "办公效率",
            icon: "briefcase",
            list: [
                {
                    url: "https://docs.qq.com",
                    name: "腾讯文档",
                    desc: "腾讯在线文档"
                },
                {
                    url: "https://feishu.cn",
                    name: "飞书",
                    desc: "字节跳动办公套件"
                },
                {
                    url: "https://github.com",
                    name: "Github",
                    desc: "代码托管平台"
                }
            ]
        },
        {
            name: "云服务器",
            icon: "server",
            list: [
                {
                    url: "https://cloud.tencent.com",
                    name: "腾讯云",
                    desc: "腾讯云计算服务"
                },
                {
                    url: "https://aliyun.com",
                    name: "阿里云",
                    desc: "阿里云计算服务"
                },
                {
                    url: "https://huaweicloud.com",
                    name: "华为云",
                    desc: "华为云计算服务"
                },
                {
                    url: "https://www.yecaoyun.com/",
                    name: "野草云",
                    desc: "野草云服务器"
                },
                {
                    url: "https://akile.io",
                    name: "Akilo",
                    desc: "Akilo云服务器"
                },
                {
                    url: "https://lxc.wiki",
                    name: "拼垃圾",
                    desc: "LXC容器服务"
                },
                {
                    url: "https://yiandrive.com",
                    name: "亿安云",
                    desc: "亿安云服务"
                },
                {
                    url: "https://bigchick.io/",
                    name: "鸡仔云",
                    desc: "鸡仔云服务"
                },
                {
                    url: "https://cloud.s7123.xyz/login",
                    name: "7123云",
                    desc: "7123云服务"
                },
            ]
        },
        {
            name: "论坛社区",
            icon: "comments",
            list: [
                {
                    url: "https://www.nodeseek.com",
                    name: "NodeSeek",
                    desc: "技术社区论坛"
                },
                {
                    url: "https://linux.do",
                    name: "LinuxDo",
                    desc: "Linux技术社区"
                },
                {
                    url: "https://reddit.com",
                    name: "Reddit",
                    desc: "全球社区论坛"
                }
            ]
        }
    ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }
    return new Response(renderHTML(renderIndex()), init);
}

addEventListener('fetch', event => {
    return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url) {
    // 首先尝试获取网站的真实favicon
    if (url.match(/https{0,1}:\/\//)) {
        const domain = url.split('//')[1].split('/')[0];
        
        // 使用高质量的favicon服务，按优先级排序
        const faviconServices = [
            // `https://favicon.yandex.net/favicon/${domain}`,              // Yandex服务
            // `https://icons.duckduckgo.com/ip3/${domain}.ico`,            // DuckDuckGo服务
            `https://icon.horse/icon/${domain}`,                         // IconHorse服务
            `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,  // Google服务，128px高质量
            // `https://besticon.herokuapp.com/icon?size=128..256..512&url=${domain}` // BestIcon服务
        ];
        
        // 返回第一个favicon服务URL
        return faviconServices[0];
    } else {
        // 如果不是标准URL格式，使用默认图标生成服务
        const cleanName = url.replace(/[^a-zA-Z0-9]/g, '').substring(0, 2).toUpperCase();
        return "https://ui-avatars.com/api/?bold=true&size=128&background=0D8ABC&color=fff&rounded=true&name=" + cleanName;
    }
}

/** Render Functions
 *  渲染模块函数
 */
function renderIndex() {
    const footer = el('footer', ['class="modern-footer"'],
        el('div', ['class="footer-content"'],
            el('p', ['class="footer-text"'],
                'Powered by ' +
                el('a', ['class="footer-link"', 'href="https://github.com/PIKACHUIM/WebIndex"', 'target="_blank"', 'rel="noopener noreferrer"'], 'PikaTools') +
                ' | © MIT License'
            )
        )
    );
    return renderHeader() + renderMain() + footer;
}

function renderHeader() {
    const item = (template, name) => el('a', ['class="search-engine-item"', `data-url="${template}"`], name);

    var title = el('div', ['class="header-content"'],
        el('div', ['class="logo-container"'],
            el('i', [`class="${config.logo_icon} icon"`, 'style="font-size: 3rem; color: #ffd700;"'], "") +
            el('div', ['class="title-text"'],
                el('h1', ['class="main-title"'], config.title) +
                el('p', ['class="subtitle"'], config.subtitle)
            )
        )
    );

    var searchContainer = el('div', ['class="search-container"'],
        el('div', ['class="search-box"'],
            el('div', ['class="search-input-wrapper"'],
                el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索工具和资源..."', 'autocomplete="off"', 'class="search-input"'], ""),
                el('button', ['class="search-button"'], el('i', ['class="search icon"'], ""))
            ) +
            el('div', ['class="search-engine-tabs"'],
                config.search_engine.map((link, key) => {
                    if (key == 0) {
                        return el('a', ['class="search-engine-item active"', `data-url="${link.template}"`], link.name);
                    } else {
                        return item(link.template, link.name);
                    }
                }).join("")
            )
        )
    );

    return el('header', ['class="modern-header"'], el('div', ['class="header-container"'], title + (config.search ? searchContainer : "")))
}

function renderMain() {
    var main = config.lists.map((item) => {
        const card = (url, name, desc) => el('a', ['class="website-card"', `href=${url}`, 'target="_blank"', 'rel="noopener noreferrer"'],
            el('div', ['class="card-content"'],
                el('div', ['class="card-icon"'], el('img', ['class="favicon"', `src=${getFavicon(url)}`, 'alt=""'], "")) +
                el('div', ['class="card-info"'],
                    el('h3', ['class="card-title"'], name) +
                    el('p', ['class="card-description"'], desc)
                )
            )
        );

        const section = el('section', ['class="website-section"'],
            el('div', ['class="section-header"'],
                el('i', [`class="${item.icon} icon"`, 'style="color: #667eea;"'], "") +
                el('h2', ['class="section-title"'], item.name)
            ) +
            el('div', ['class="website-grid"'],
                item.list.map((link) => {
                    return card(link.url, link.name, link.desc);
                }).join("")
            )
        );

        return section;
    }).join("");

    return el('main', ['class="main-content"'], el('div', ['class="container"'], main));
}

function renderHTML(index) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${config.title} - ${config.subtitle}</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
            line-height: 1.6;
        }
        
        .modern-header {
            padding: 2rem 0;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .nav-container {
            margin-bottom: 2rem;
        }
        
        .nav-content {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .hitokoto-text {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            font-weight: 300;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header-content {
            margin-bottom: 3rem;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .main-title {
            font-size: 3.5rem;
            font-weight: 700;
            color: white;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            margin: 0;
        }
        
        .subtitle {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 300;
            margin: 0;
        }
        
        .search-container {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .search-box {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 25px;
            padding: 1.5rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
        }
        
        .search-input-wrapper {
            display: flex;
            align-items: center;
            background: #f8f9fa;
            border-radius: 50px;
            padding: 0.5rem 1rem;
            margin-bottom: 1rem;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .search-input-wrapper:focus-within {
            border-color: #667eea;
            background: white;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .search-input {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            font-size: 1.1rem;
            padding: 0.5rem;
            color: #333;
        }
        
        .search-input::placeholder {
            color: #999;
        }
        
        .search-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .search-button:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .search-engine-tabs {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .search-engine-item {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            text-decoration: none;
            color: #666;
            background: #f8f9fa;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .search-engine-item:hover {
            background: #e9ecef;
            transform: translateY(-2px);
        }
        
        .search-engine-item.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .main-content {
            padding: 3rem 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .website-section {
            margin-bottom: 4rem;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .section-title {
            font-size: 2rem;
            color: white;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .website-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        
        .website-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 1.5rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .website-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            background: white;
        }
        
        .card-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .card-icon {
            flex-shrink: 0;
        }
        
        .favicon {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            object-fit: cover;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            backface-visibility: hidden;
            transform: translateZ(0);
        }
        
        .card-info {
            flex: 1;
            min-width: 0;
        }
        
        .card-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .card-description {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .modern-footer {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            padding: 2rem 0;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .footer-text {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
        }
        
        .footer-link {
            color: #ffd700;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-link:hover {
            color: #ffed4e;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .header-container,
            .container,
            .footer-content {
                padding: 0 1rem;
            }
            
            .main-title {
                font-size: 2.5rem;
            }
            
            .subtitle {
                font-size: 1.1rem;
            }
            
            .search-box {
                padding: 1rem;
            }
            
            .website-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .search-engine-tabs {
                gap: 0.3rem;
            }
            
            .search-engine-item {
                padding: 0.4rem 0.8rem;
                font-size: 0.8rem;
            }
        }
        
        @media (max-width: 480px) {
            .main-title {
                font-size: 2rem;
            }
            
            .logo-container {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .card-content {
                flex-direction: column;
                text-align: center;
            }
        }
        
        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .website-card {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .website-card:nth-child(1) { animation-delay: 0.1s; }
        .website-card:nth-child(2) { animation-delay: 0.2s; }
        .website-card:nth-child(3) { animation-delay: 0.3s; }
        .website-card:nth-child(4) { animation-delay: 0.4s; }
    </style>
  </head>
  <body>
    ${index}
    <script>
      // 搜索引擎切换
      document.querySelectorAll('.search-engine-item').forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelectorAll('.search-engine-item').forEach(i => i.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // 搜索功能
      document.querySelector('.search-button').addEventListener('click', function() {
        const query = document.getElementById('searchinput').value.trim();
        if (query) {
          const activeEngine = document.querySelector('.search-engine-item.active');
          const url = activeEngine.dataset.url.replace('$s', encodeURIComponent(query));
          window.open(url, '_blank');
        }
      });
      
      // 回车搜索
      document.getElementById('searchinput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          document.querySelector('.search-button').click();
        }
      });
      
      // 平滑滚动
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
      
      // 图标加载优化
      document.querySelectorAll('.favicon').forEach(img => {
        img.addEventListener('error', function() {
          // 如果图标加载失败，使用备用图标服务
          const currentSrc = this.src;
          if (currentSrc.includes('google.com/s2/favicons')) {
            // 切换到Yandex服务
            this.src = currentSrc.replace('google.com/s2/favicons?domain=', 'favicon.yandex.net/favicon/').replace('&sz=128', '');
          } else if (currentSrc.includes('yandex.net/favicon')) {
            // 切换到DuckDuckGo服务
            const domain = currentSrc.split('/').pop();
            this.src = 'https://icons.duckduckgo.com/ip3/' + domain + '.ico';
          }
        });
        
        // 添加加载完成后的优化
        img.addEventListener('load', function() {
          // 确保图标清晰显示
          this.style.opacity = '1';
        });
        
        // 初始状态
        img.style.opacity = '0.8';
        img.style.transition = 'opacity 0.3s ease';
      });
    </script>
  </body>
</html>`
}
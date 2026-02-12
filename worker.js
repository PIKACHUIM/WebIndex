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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --neon-cyan: #00fff9;
            --neon-magenta: #ff00ff;
            --neon-yellow: #ffff00;
            --dark-bg: #0a0e27;
            --darker-bg: #050814;
            --card-bg: rgba(15, 20, 40, 0.85);
            --text-primary: #e0e6ff;
            --text-secondary: #8b95c9;
        }
        
        body {
            font-family: 'Rajdhani', -apple-system, sans-serif;
            background: var(--dark-bg);
            min-height: 100vh;
            color: var(--text-primary);
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }
        
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                repeating-linear-gradient(0deg, rgba(0, 255, 249, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 249, 0.03) 3px),
                repeating-linear-gradient(90deg, rgba(255, 0, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(255, 0, 255, 0.03) 3px);
            background-size: 100px 100px;
            pointer-events: none;
            z-index: 1;
            animation: gridScroll 20s linear infinite;
        }
        
        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at top, rgba(0, 255, 249, 0.15) 0%, transparent 60%),
                        radial-gradient(ellipse at bottom, rgba(255, 0, 255, 0.15) 0%, transparent 60%);
            pointer-events: none;
            z-index: 1;
        }
        
        @keyframes gridScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(100px); }
        }
        
        .modern-header {
            padding: 3rem 0;
            text-align: center;
            background: rgba(5, 8, 20, 0.6);
            backdrop-filter: blur(20px);
            border-bottom: 2px solid var(--neon-cyan);
            box-shadow: 0 0 30px rgba(0, 255, 249, 0.3);
            position: relative;
            z-index: 10;
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 10;
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
            color: var(--neon-cyan);
            font-size: 1.1rem;
            font-weight: 300;
            text-shadow: 0 0 10px var(--neon-cyan);
        }
        
        .header-content {
            margin-bottom: 3rem;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .logo-container i {
            animation: pulse 2s ease-in-out infinite;
            filter: drop-shadow(0 0 20px var(--neon-yellow));
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .main-title {
            font-family: 'Orbitron', monospace;
            font-size: 4rem;
            font-weight: 900;
            color: var(--neon-cyan);
            text-shadow: 
                0 0 10px var(--neon-cyan),
                0 0 20px var(--neon-cyan),
                0 0 40px var(--neon-cyan),
                0 0 80px rgba(0, 255, 249, 0.5);
            margin: 0;
            letter-spacing: 0.1em;
            animation: glitch 3s infinite;
            position: relative;
        }
        
        @keyframes glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 2px); }
            94% { transform: translate(2px, -2px); }
            96% { transform: translate(-2px, -2px); }
        }
        
        .subtitle {
            font-size: 1.4rem;
            color: var(--neon-magenta);
            font-weight: 400;
            margin: 0;
            text-shadow: 0 0 10px var(--neon-magenta);
            letter-spacing: 0.15em;
            text-transform: uppercase;
        }
        
        .search-container {
            max-width: 700px;
            margin: 0 auto;
        }
        
        .search-box {
            background: var(--card-bg);
            border-radius: 0;
            padding: 2rem;
            box-shadow: 
                0 0 0 2px var(--neon-cyan),
                0 0 20px rgba(0, 255, 249, 0.4),
                inset 0 0 30px rgba(0, 255, 249, 0.05);
            backdrop-filter: blur(20px);
            position: relative;
            clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        
        .search-box::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta), var(--neon-cyan));
            background-size: 200% 200%;
            animation: borderGlow 3s ease infinite;
            z-index: -1;
            opacity: 0.5;
            filter: blur(10px);
        }
        
        @keyframes borderGlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .search-input-wrapper {
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0;
            padding: 0.8rem 1.2rem;
            margin-bottom: 1.5rem;
            border: 1px solid var(--neon-cyan);
            transition: all 0.3s ease;
            position: relative;
        }
        
        .search-input-wrapper:focus-within {
            border-color: var(--neon-magenta);
            background: rgba(0, 0, 0, 0.7);
            box-shadow: 
                0 0 20px rgba(255, 0, 255, 0.4),
                inset 0 0 20px rgba(255, 0, 255, 0.1);
        }
        
        .search-input {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            font-size: 1.1rem;
            padding: 0.5rem;
            color: var(--text-primary);
            font-family: 'Rajdhani', monospace;
            font-weight: 600;
            letter-spacing: 0.05em;
        }
        
        .search-input::placeholder {
            color: var(--text-secondary);
            opacity: 0.6;
        }
        
        .search-button {
            background: var(--neon-cyan);
            border: none;
            border-radius: 0;
            width: 45px;
            height: 45px;
            color: var(--dark-bg);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
            box-shadow: 0 0 20px var(--neon-cyan);
        }
        
        .search-button:hover {
            background: var(--neon-magenta);
            transform: scale(1.05);
            box-shadow: 0 0 30px var(--neon-magenta);
        }
        
        .search-engine-tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .search-engine-item {
            padding: 0.6rem 1.5rem;
            border-radius: 0;
            text-decoration: none;
            color: var(--text-secondary);
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid var(--text-secondary);
            transition: all 0.3s ease;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }
        
        .search-engine-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 249, 0.3), transparent);
            transition: left 0.5s ease;
        }
        
        .search-engine-item:hover::before {
            left: 100%;
        }
        
        .search-engine-item:hover {
            border-color: var(--neon-cyan);
            color: var(--neon-cyan);
            box-shadow: 0 0 15px rgba(0, 255, 249, 0.4);
            transform: translateY(-2px);
        }
        
        .search-engine-item.active {
            background: var(--neon-cyan);
            color: var(--dark-bg);
            border-color: var(--neon-cyan);
            box-shadow: 0 0 20px var(--neon-cyan);
            font-weight: 700;
        }
        
        .main-content {
            padding: 4rem 0;
            position: relative;
            z-index: 10;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .website-section {
            margin-bottom: 5rem;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }
        
        .section-header::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(0, 255, 249, 0.1) 0%, transparent 70%);
            z-index: -1;
            animation: sectionPulse 3s ease-in-out infinite;
        }
        
        @keyframes sectionPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        
        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 2.5rem;
            color: var(--neon-cyan);
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            text-shadow: 0 0 10px var(--neon-cyan);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
            box-shadow: 0 0 10px var(--neon-cyan);
        }
        
        .website-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
        }
        
        .website-card {
            background: var(--card-bg);
            border-radius: 0;
            padding: 1.8rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 255, 249, 0.3);
            box-shadow: 
                0 0 0 1px rgba(0, 255, 249, 0.2),
                0 10px 30px rgba(0, 0, 0, 0.5),
                inset 0 0 20px rgba(0, 255, 249, 0.03);
            position: relative;
            overflow: hidden;
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        }
        
        .website-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 249, 0.1) 50%, transparent 70%);
            transform: rotate(45deg);
            transition: all 0.6s ease;
        }
        
        .website-card:hover::before {
            left: 100%;
        }
        
        .website-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 255, 249, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        
        .website-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: var(--neon-cyan);
            box-shadow: 
                0 0 0 2px var(--neon-cyan),
                0 0 30px rgba(0, 255, 249, 0.6),
                0 20px 50px rgba(0, 0, 0, 0.7),
                inset 0 0 30px rgba(0, 255, 249, 0.1);
        }
        
        .website-card:hover::after {
            opacity: 1;
        }
        
        .card-content {
            display: flex;
            align-items: center;
            gap: 1.2rem;
            position: relative;
            z-index: 1;
        }
        
        .card-icon {
            flex-shrink: 0;
            position: relative;
        }
        
        .card-icon::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            background: radial-gradient(circle, rgba(0, 255, 249, 0.2) 0%, transparent 70%);
            border-radius: 50%;
            animation: iconGlow 2s ease-in-out infinite;
        }
        
        @keyframes iconGlow {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.8; }
        }
        
        .favicon {
            width: 56px;
            height: 56px;
            border-radius: 0;
            box-shadow: 
                0 0 0 2px var(--neon-cyan),
                0 0 20px rgba(0, 255, 249, 0.4);
            object-fit: cover;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            backface-visibility: hidden;
            transform: translateZ(0);
            position: relative;
            z-index: 1;
            clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
            transition: all 0.3s ease;
        }
        
        .website-card:hover .favicon {
            box-shadow: 
                0 0 0 2px var(--neon-magenta),
                0 0 30px rgba(255, 0, 255, 0.6);
            transform: translateZ(0) scale(1.1) rotate(5deg);
        }
        
        .card-info {
            flex: 1;
            min-width: 0;
        }
        
        .card-title {
            font-family: 'Orbitron', monospace;
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--neon-cyan);
            margin-bottom: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-shadow: 0 0 5px rgba(0, 255, 249, 0.5);
            letter-spacing: 0.05em;
            transition: all 0.3s ease;
        }
        
        .website-card:hover .card-title {
            color: var(--neon-magenta);
            text-shadow: 0 0 10px var(--neon-magenta);
        }
        
        .card-description {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-weight: 400;
            letter-spacing: 0.03em;
        }
        
        .modern-footer {
            background: rgba(5, 8, 20, 0.8);
            backdrop-filter: blur(20px);
            padding: 2.5rem 0;
            text-align: center;
            border-top: 2px solid var(--neon-magenta);
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
            position: relative;
            z-index: 10;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .footer-text {
            color: var(--text-secondary);
            font-size: 1rem;
            letter-spacing: 0.05em;
            font-weight: 400;
        }
        
        .footer-link {
            color: var(--neon-cyan);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 600;
            text-shadow: 0 0 5px rgba(0, 255, 249, 0.5);
        }
        
        .footer-link:hover {
            color: var(--neon-magenta);
            text-shadow: 0 0 10px var(--neon-magenta);
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
                font-size: 1rem;
            }
            
            .search-box {
                padding: 1.5rem;
            }
            
            .website-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .search-engine-tabs {
                gap: 0.5rem;
            }
            
            .search-engine-item {
                padding: 0.5rem 1rem;
                font-size: 0.85rem;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
        }
        
        @media (max-width: 480px) {
            .main-title {
                font-size: 2rem;
            }
            
            .logo-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            .card-content {
                flex-direction: row;
                text-align: left;
            }
            
            .favicon {
                width: 48px;
                height: 48px;
            }
        }
        
        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
        
        /* 扫描线效果 */
        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(to bottom, transparent, var(--neon-cyan), transparent);
            box-shadow: 0 0 20px var(--neon-cyan);
            animation: scanline 8s linear infinite;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.3;
        }
        
        .website-card {
            animation: fadeInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
        }
        
        .website-card:nth-child(1) { animation-delay: 0.1s; }
        .website-card:nth-child(2) { animation-delay: 0.15s; }
        .website-card:nth-child(3) { animation-delay: 0.2s; }
        .website-card:nth-child(4) { animation-delay: 0.25s; }
        .website-card:nth-child(5) { animation-delay: 0.3s; }
        .website-card:nth-child(6) { animation-delay: 0.35s; }
        .website-card:nth-child(7) { animation-delay: 0.4s; }
        .website-card:nth-child(8) { animation-delay: 0.45s; }
        .website-card:nth-child(9) { animation-delay: 0.5s; }
        .website-card:nth-child(10) { animation-delay: 0.55s; }
        
        /* 鼠标光标效果 */
        * {
            cursor: default;
        }
        
        a, button, .search-input {
            cursor: pointer;
        }
        
        /* 滚动条样式 */
        ::-webkit-scrollbar {
            width: 12px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--darker-bg);
            border-left: 1px solid rgba(0, 255, 249, 0.2);
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, var(--neon-cyan), var(--neon-magenta));
            border-radius: 0;
            box-shadow: 0 0 10px var(--neon-cyan);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, var(--neon-magenta), var(--neon-cyan));
            box-shadow: 0 0 20px var(--neon-magenta);
        }
    </style>
  </head>
  <body>
    ${index}
    <script>
      // 创建粒子背景效果
      function createParticles() {
        const particleCount = 50;
        const particles = [];
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.style.position = 'fixed';
          particle.style.width = Math.random() * 3 + 1 + 'px';
          particle.style.height = particle.style.width;
          particle.style.background = Math.random() > 0.5 ? 'var(--neon-cyan)' : 'var(--neon-magenta)';
          particle.style.borderRadius = '50%';
          particle.style.pointerEvents = 'none';
          particle.style.zIndex = '2';
          particle.style.boxShadow = '0 0 10px currentColor';
          particle.style.opacity = Math.random() * 0.5 + 0.2;
          
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const speedX = (Math.random() - 0.5) * 0.5;
          const speedY = (Math.random() - 0.5) * 0.5;
          
          particle.style.left = x + 'px';
          particle.style.top = y + 'px';
          
          document.body.appendChild(particle);
          particles.push({ element: particle, x, y, speedX, speedY });
        }
        
        function animateParticles() {
          particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > window.innerWidth) p.speedX *= -1;
            if (p.y < 0 || p.y > window.innerHeight) p.speedY *= -1;
            
            p.element.style.left = p.x + 'px';
            p.element.style.top = p.y + 'px';
          });
          
          requestAnimationFrame(animateParticles);
        }
        
        animateParticles();
      }
      
      // 页面加载完成后创建粒子
      window.addEventListener('load', createParticles);
      
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
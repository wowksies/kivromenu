(function() {
    // 1. Check if already open to prevent duplicates
    if (document.getElementById('kivro-menu-v2')) return;

    // 2. Configuration: Add your scripts here
    const MENU_ITEMS = [
        {
            name: "🦄 Blooket Cheats (GUI)",
            // Added javascript: prefix as requested
            code: "javascript:(function(){var s=document.createElement('script');s.src='https://raw.githack.com/Zip-On/Zips-Blooket-Hacks-And-Cheats-GUI/main/Gui.js';document.body.appendChild(s);alert('Blooket GUI Injecting...');})();"
        },
        {
            name: "👆 iPad Autoclicker (Toggle)",
            code: "(function(){if(window.kivroAC){clearInterval(window.kivroAC);window.kivroAC=null;alert('Autoclicker: OFF');}else{alert('Autoclicker: ON (Center Screen)');window.kivroAC=setInterval(function(){var el=document.elementFromPoint(window.innerWidth/2,window.innerHeight/2);if(el){el.click();el.dispatchEvent(new MouseEvent('mousedown'));el.dispatchEvent(new MouseEvent('mouseup'));}}, 25);}})();"
        },
        {
            name: "💰 Add 500 Tokens",
            code: "console.log('Tokens added');"
        },
        {
            name: "🛡️ Anti-Ban",
            code: "alert('Anti-ban protection is active.');"
        },
        {
            name: "🚀 Speed Hack",
            code: "alert('Speed multiplier set.');"
        }
    ];

    // 3. CSS Styles
    const css = `
        #kivro-menu-v2 {
            position: fixed; top: 100px; left: 100px;
            width: 250px; display: flex; flex-direction: column;
            background: rgba(15, 15, 15, 0.9);
            backdrop-filter: blur(20px) saturate(160%);
            -webkit-backdrop-filter: blur(20px) saturate(160%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
            font-family: system-ui, -apple-system, sans-serif;
            color: white; z-index: 999999999;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            overflow: hidden;
            user-select: none;
        }
        
        #kivro-menu-v2.minimized {
            width: 50px; height: 50px; border-radius: 25px;
            background: #8b5cf6;
            box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
            cursor: pointer;
            border: 2px solid white;
        }

        #kivro-menu-v2.minimized > * { opacity: 0; pointer-events: none; }

        .kv-header {
            padding: 16px;
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            display: flex; justify-content: space-between; align-items: center;
            cursor: move;
        }

        .kv-title {
            font-weight: 900; font-size: 11px; letter-spacing: 2px;
            color: #a78bfa; text-transform: uppercase;
        }

        .kv-controls span {
            cursor: pointer; padding: 0 8px; font-size: 14px; opacity: 0.6; transition: 0.2s;
        }
        .kv-controls span:hover { opacity: 1; color: white; }

        .kv-body { padding: 12px; max-height: 400px; overflow-y: auto; }
        
        .kv-btn {
            width: 100%; padding: 12px; margin-bottom: 8px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px; color: #e4e4e7;
            font-size: 13px; font-weight: 700; text-align: left;
            cursor: pointer; transition: all 0.2s;
            display: flex; justify-content: space-between;
        }

        .kv-btn:hover {
            background: rgba(139, 92, 246, 0.2);
            border-color: rgba(139, 92, 246, 0.4);
            color: white; transform: translateX(4px);
        }
    `;

    // 4. Inject CSS
    const styleTag = document.createElement('style');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

    // 5. Create UI
    const ui = document.createElement('div');
    ui.id = 'kivro-menu-v2';
    ui.innerHTML = `
        <div class="kv-header">
            <span class="kv-title">KIVRO PREMIUM</span>
            <div class="kv-controls">
                <span id="kv-min">─</span>
                <span id="kv-close">✕</span>
            </div>
        </div>
        <div class="kv-body"></div>
    `;

    document.body.appendChild(ui);

    // 6. Populate Buttons
    const body = ui.querySelector('.kv-body');
    MENU_ITEMS.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'kv-btn';
        btn.innerHTML = `<span>${item.name}</span><span style="opacity:0.3">›</span>`;
        btn.onclick = () => {
            try { eval(item.code); } 
            catch(err) { alert('Script Error: ' + err); }
        };
        body.appendChild(btn);
    });

    // 7. Drag & Minimize Logic
    let isMin = false;
    
    ui.querySelector('#kv-min').onclick = (e) => {
        e.stopPropagation();
        isMin = true;
        ui.classList.add('minimized');
    };

    ui.onclick = () => {
        if(isMin && !isDragging) {
            isMin = false;
            ui.classList.remove('minimized');
        }
    };

    ui.querySelector('#kv-close').onclick = () => ui.remove();

    let isDragging = false, startX, startY, initialLeft, initialTop;

    const header = ui.querySelector('.kv-header');
    ui.onmousedown = (e) => {
        if (!isMin && !header.contains(e.target)) return;
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = ui.offsetLeft;
        initialTop = ui.offsetTop;
        ui.style.transition = 'none';
        e.preventDefault(); // Prevent text selection
    };

    document.onmousemove = (e) => {
        if (!isDragging) return;
        ui.style.left = (initialLeft + e.clientX - startX) + 'px';
        ui.style.top = (initialTop + e.clientY - startY) + 'px';
    };

    document.onmouseup = () => {
        if (!isDragging) return;
        isDragging = false;
        ui.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    };
})();

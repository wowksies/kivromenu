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
            name: "👆 iPad Autoclicker (Target)",
            code: "(function(){if(window.kivroAC){clearInterval(window.kivroAC);window.kivroAC=null;var t=document.getElementById('kivro-ac-target');if(t)t.remove();alert('Autoclicker: OFF');}else{var t=document.createElement('div');t.id='kivro-ac-target';t.style.cssText='position:fixed;top:50%;left:50%;width:60px;height:60px;margin:-30px 0 0 -30px;border:4px solid rgba(255,0,60,0.6);border-radius:50%;z-index:9999999999;box-shadow:0 0 15px rgba(255,0,60,0.4);pointer-events:none;transition:transform 0.1s;';var h=document.createElement('div');h.style.cssText='position:absolute;top:-20px;left:50%;transform:translateX(-50%);width:30px;height:30px;background:rgba(255,0,60,0.9);border-radius:50%;cursor:move;pointer-events:auto;box-shadow:0 2px 8px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;color:white;font-size:16px;font-weight:bold;';h.innerText='✢';t.appendChild(h);var c=document.createElement('div');c.style.cssText='position:absolute;top:50%;left:50%;width:4px;height:4px;background:red;transform:translate(-50%,-50%);border-radius:50%;';t.appendChild(c);document.body.appendChild(t);let d=false;const mv=(e)=>{if(!d)return;e.preventDefault();const cx=e.touches?e.touches[0].clientX:e.clientX;const cy=e.touches?e.touches[0].clientY:e.clientY;t.style.left=cx+'px';t.style.top=cy+'px';};const dn=(e)=>{d=true;e.preventDefault();t.style.transform='scale(1.1)';};const up=()=>{d=false;t.style.transform='scale(1)';};h.addEventListener('mousedown',dn);h.addEventListener('touchstart',dn);document.addEventListener('mousemove',mv);document.addEventListener('touchmove',mv);document.addEventListener('mouseup',up);document.addEventListener('touchend',up);alert('Autoclicker: ON. Drag the red knob to move.');window.kivroAC=setInterval(function(){var r=t.getBoundingClientRect();var el=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);if(el&&el!==t&&el!==h&&el!==c){el.click();el.dispatchEvent(new MouseEvent('mousedown'));el.dispatchEvent(new MouseEvent('mouseup'));}},50);}})();"
        },
        {
            name: "History Flooder",
            code: "javascript:var num=prompt("History Flood Amount:");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("History Flood Successful! "+window.location.href+" Now Appears In Your History "+num+(num==1?" Time!":" Times!"))}"
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
            width: 260px; display: flex; flex-direction: column;
            background: rgba(20, 20, 30, 0.65);
            backdrop-filter: blur(25px) saturate(180%);
            -webkit-backdrop-filter: blur(25px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 24px;
            box-shadow: 
                0 20px 50px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 0 20px rgba(255, 255, 255, 0.05);
            font-family: system-ui, -apple-system, sans-serif;
            color: white; z-index: 999999999;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            overflow: hidden;
            user-select: none;
        }
        
        #kivro-menu-v2.minimized {
            width: 50px; height: 50px; border-radius: 25px;
            background: linear-gradient(135deg, #8b5cf6, #6d28d9);
            box-shadow: 0 0 25px rgba(139, 92, 246, 0.8);
            cursor: pointer;
            border: 2px solid white;
        }

        #kivro-menu-v2.minimized > * { opacity: 0; pointer-events: none; }

        .kv-header {
            padding: 18px;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.05), transparent);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            display: flex; justify-content: space-between; align-items: center;
            cursor: move;
        }

        .kv-title {
            font-weight: 800; font-size: 12px; letter-spacing: 1.5px;
            background: linear-gradient(90deg, #fff, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
        }

        .kv-controls span {
            cursor: pointer; padding: 4px 8px; font-size: 14px; opacity: 0.6; 
            transition: all 0.2s; border-radius: 6px;
        }
        .kv-controls span:hover { 
            opacity: 1; color: white; background: rgba(255,255,255,0.1); 
        }

        .kv-body { padding: 12px; max-height: 400px; overflow-y: auto; }
        
        .kv-btn {
            width: 100%; padding: 14px; margin-bottom: 8px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 14px; color: #e4e4e7;
            font-size: 13px; font-weight: 600; text-align: left;
            cursor: pointer; transition: all 0.2s ease;
            display: flex; justify-content: space-between;
            position: relative; overflow: hidden;
        }

        .kv-btn:hover {
            background: rgba(139, 92, 246, 0.15);
            border-color: rgba(139, 92, 246, 0.3);
            color: white; transform: translateX(2px) scale(1.01);
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
        }
        
        .kv-btn:active { transform: scale(0.98); }
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
        btn.innerHTML = `<span>${item.name}</span><span style="opacity:0.4">›</span>`;
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

var defaultLoadingCSS = `
    <style>
      @keyframes ce-rotate{
        from{transform:rotate(0)}
        to{transform:rotate(359deg)}
      }
      a-router {
        display: block; 
        /*overflow: hidden;*/
      }
      a-router > .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        position:absolute; top: 0; left: 0; 
        width:100%; height: 100%; 
        min-height: 64px;
        background-color: rgba(255,255,255,0.5); 
      }
      a-router > .loading > svg {
        animation: ce-rotate 1.4s infinite linear;
        vertical-align: middle;
      }
      a-router > .loading > svg circle {
        stroke-dasharray: 44.2336, 200;
        stroke-dashoffset: -15;
        stroke: var(--theme-color-500, #9e9e9e);
        stroke-linecap: round;
        opacity: 1;
        stroke-width: 3;
        fill: none;
      }
      a-router > .loading > svg polygon {
        fill: var(--theme-color-500, #9e9e9e);
        transform: rotate(314deg);
        transform-origin: 16px 16px 0px;
        opacity: 1;
      }
      a-router > .router-target {
        opacity: 0;
        margin-left: 100%;
      }
      a-router > .router-target.slide-in {
        opacity: 1;
        margin-left: 0%;
        transition: all 0.25s;
      }
    </style>`;

var defaultLoadingHTML = defaultLoadingCSS + `
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg: viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="11"></circle>
        <polygon points="21.75,16 32.25,16 27,21.25"></polygon>
      </svg>
    </div>`;

export {defaultLoadingHTML};
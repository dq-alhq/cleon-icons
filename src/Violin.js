import * as React from 'react'
const SvgViolin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <mask id="violin_svg__a" fill="#fff">
      <path d="m21.168 3.678.18-.27.207.207.445-.64-.22-.22.22-.331-.424-.423-.33.219-.22-.22-.642.444.208.208-.27.18-.075.421-.178.118-.447-.446.188-.188-.61-.28-.315.317.28.609.187-.188.391.392-.614.409-.733-.733-.271.271.835.837-3.93 3.65c-.676-.633-1.692-1.434-2.754-1.434-.87 0-1.598.52-2.165 1.542-.1.18-.167.39-.232.593-.192.6-.358.982-.955 1.035L3.96 4.793l-1.632.674.479.48.289.289.384.384 4.912 4.912a1.1 1.1 0 0 1-.32.372c-.454.34-.834.512-1.132.512-.16 0-.396-.045-.585-.433-.09-.18-.275-.373-.53-.373-.553 0-.671.822-.71 1.091-.022.151-.157.507-.936.56-.946.063-1.675.596-2 1.46-.439 1.171-.172 3.159 1.896 5.226C5.399 21.271 6.86 22 8.193 22c1.412 0 2.443-.863 2.566-2.147.08-.815.45-.93.56-.946.433-.062 1.017-.195 1.087-.635.037-.239-.106-.477-.368-.605-.236-.116-.372-.259-.416-.438q-.113-.461.5-1.285.146-.2.365-.317l4.143 4.143.748.749.675.674.479.48.674-1.633-4.941-4.941c.056-.641.495-.783 1.034-.955.203-.065.413-.132.593-.232.906-.503 1.418-1.135 1.522-1.88.165-1.179-.737-2.32-1.434-3.06l3.732-4.021.143.143.259-.39.438.437-.187.188.609.28.315-.317-.28-.609-.187.187-.492-.493.268-.404 1.005 1.006.271-.272-.98-.98zM10.503 8.922c.058-.18.113-.35.18-.474.45-.81.972-1.205 1.593-1.205.815 0 1.672.67 2.271 1.226l-3.583 3.329-1.499-1.499c.676-.264.89-.911 1.038-1.377m1.976 6.009-1.086-1.087.27-.272.024.023.186-.2 1.5 1.502a2 2 0 0 0-.39-.039q-.257 0-.504.073m-4.47 1.557 2.67-2.67.245.247-2.668 2.668zm1.598-3.581a.6.6 0 0 0 .027-.132l.18.18-.153.152a.24.24 0 0 0-.054-.2m.331.172.245.245-2.667 2.669-.246-.245zm.861-.37-.27.27-.246-.245.271-.271zm.741.74-.271.271-.246-.246.271-.271zm-.641-.099-.247-.246.272-.272.246.247zm-.591.098.246.247-2.668 2.668-.246-.245zm.74.74.18.18a.6.6 0 0 0-.133.028.24.24 0 0 0-.2-.054zm-.64-1.873.022.023-.271.272-1.07-1.069a2 2 0 0 0 .043-.886l1.475 1.475zM4.29 5.812l3.918 3.919-.177-.013.28.524c.013.024.176.338.195.716l-4.68-4.682zm-1.495 9.142c.233-.623.741-.992 1.43-1.038 1.29-.087 1.505-.878 1.54-1.12.025-.172.053-.295.08-.38.32.538.767.657 1.097.657.666 0 1.311-.484 1.53-.647.169-.127.296-.268.397-.416l.348.348c-.87-.06-2.042 2.147-2.552 1.637-.127-.128-.094-.24-.06-.301a.237.237 0 0 0 .203-.406.24.24 0 0 0-.341 0 .24.24 0 0 0-.031.295c-.07.102-.204.363.038.604.827.828 2.374-2.014 2.9-1.487.035.034.038.085.033.13a.233.233 0 0 0-.22.236.236.236 0 0 0 .284.233l-2.325 2.325-.217-.217s-.412.689-.506.938c-.084.224-.098.723-.213.932-.285.515-1.404 1.512-1.914 1.953-1.623-1.754-1.836-3.385-1.501-4.276m8.793.61c-.195.262-.788 1.059-.603 1.82.08.33.29.598.622.796a3 3 0 0 1-.381.08c-.231.033-.995.241-1.12 1.531-.091.96-.825 1.555-1.912 1.555-.637 0-1.905-.222-3.42-1.637.44-.509 1.438-1.63 1.952-1.915.21-.116.709-.129.932-.214.25-.093.938-.506.938-.506l-.216-.216 2.324-2.325a.237.237 0 0 0 .326.265.234.234 0 0 0 .144-.201c.043-.006.094-.002.128.031.528.527-2.313 2.075-1.486 2.903.241.242.502.107.604.037a.236.236 0 0 0 .347-.11.24.24 0 0 0-.393-.262.24.24 0 0 0-.065.202c-.061.036-.173.069-.3-.06-.51-.51 1.696-1.681 1.636-2.552l.367.366a1.8 1.8 0 0 0-.424.412m1.479-.045c.247.018.49.084.713.193l.526.286-.013-.182 3.895 3.895-.465.464-.749-.748zm3.698-3.578c-.074.53-.475 1-1.19 1.397-.124.069-.295.123-.476.181-.47.15-1.114.363-1.376 1.038l-1.519-1.52 3.329-3.584c.61.652 1.356 1.606 1.232 2.488" />
    </mask>
    <path
      stroke="currentColor"
      strokeWidth={4}
      d="m21.168 3.678.18-.27.207.207.445-.64-.22-.22.22-.331-.424-.423-.33.219-.22-.22-.642.444.208.208-.27.18-.075.421-.178.118-.447-.446.188-.188-.61-.28-.315.317.28.609.187-.188.391.392-.614.409-.733-.733-.271.271.835.837-3.93 3.65c-.676-.633-1.692-1.434-2.754-1.434-.87 0-1.598.52-2.165 1.542-.1.18-.167.39-.232.593-.192.6-.358.982-.955 1.035L3.96 4.793l-1.632.674.479.48.289.289.384.384 4.912 4.912a1.1 1.1 0 0 1-.32.372c-.454.34-.834.512-1.132.512-.16 0-.396-.045-.585-.433-.09-.18-.275-.373-.53-.373-.553 0-.671.822-.71 1.091-.022.151-.157.507-.936.56-.946.063-1.675.596-2 1.46-.439 1.171-.172 3.159 1.896 5.226C5.399 21.271 6.86 22 8.193 22c1.412 0 2.443-.863 2.566-2.147.08-.815.45-.93.56-.946.433-.062 1.017-.195 1.087-.635.037-.239-.106-.477-.368-.605-.236-.116-.372-.259-.416-.438q-.113-.461.5-1.285.146-.2.365-.317l4.143 4.143.748.749.675.674.479.48.674-1.633-4.941-4.941c.056-.641.495-.783 1.034-.955.203-.065.413-.132.593-.232.906-.503 1.418-1.135 1.522-1.88.165-1.179-.737-2.32-1.434-3.06l3.732-4.021.143.143.259-.39.438.437-.187.188.609.28.315-.317-.28-.609-.187.187-.492-.493.268-.404 1.005 1.006.271-.272-.98-.98zM10.503 8.922c.058-.18.113-.35.18-.474.45-.81.972-1.205 1.593-1.205.815 0 1.672.67 2.271 1.226l-3.583 3.329-1.499-1.499c.676-.264.89-.911 1.038-1.377Zm1.976 6.009-1.086-1.087.27-.272.024.023.186-.2 1.5 1.502a2 2 0 0 0-.39-.039q-.257 0-.504.073Zm-4.47 1.557 2.67-2.67.245.247-2.668 2.668zm1.598-3.581a.6.6 0 0 0 .027-.132l.18.18-.153.152a.24.24 0 0 0-.054-.2Zm.331.172.245.245-2.667 2.669-.246-.245zm.861-.37-.27.27-.246-.245.271-.271zm.741.74-.271.271-.246-.246.271-.271zm-.641-.099-.247-.246.272-.272.246.247zm-.591.098.246.247-2.668 2.668-.246-.245zm.74.74.18.18a.6.6 0 0 0-.133.028.24.24 0 0 0-.2-.054zm-.64-1.873.022.023-.271.272-1.07-1.069a2 2 0 0 0 .043-.886l1.475 1.475zM4.29 5.812l3.918 3.919-.177-.013.28.524c.013.024.176.338.195.716l-4.68-4.682zm-1.495 9.142c.233-.623.741-.992 1.43-1.038 1.29-.087 1.505-.878 1.54-1.12.025-.172.053-.295.08-.38.32.538.767.657 1.097.657.666 0 1.311-.484 1.53-.647.169-.127.296-.268.397-.416l.348.348c-.87-.06-2.042 2.147-2.552 1.637-.127-.128-.094-.24-.06-.301a.237.237 0 0 0 .203-.406.24.24 0 0 0-.341 0 .24.24 0 0 0-.031.295c-.07.102-.204.363.038.604.827.828 2.374-2.014 2.9-1.487.035.034.038.085.033.13a.233.233 0 0 0-.22.236.236.236 0 0 0 .284.233l-2.325 2.325-.217-.217s-.412.689-.506.938c-.084.224-.098.723-.213.932-.285.515-1.404 1.512-1.914 1.953-1.623-1.754-1.836-3.385-1.501-4.276Zm8.793.61c-.195.262-.788 1.059-.603 1.82.08.33.29.598.622.796a3 3 0 0 1-.381.08c-.231.033-.995.241-1.12 1.531-.091.96-.825 1.555-1.912 1.555-.637 0-1.905-.222-3.42-1.637.44-.509 1.438-1.63 1.952-1.915.21-.116.709-.129.932-.214.25-.093.938-.506.938-.506l-.216-.216 2.324-2.325a.237.237 0 0 0 .326.265.234.234 0 0 0 .144-.201c.043-.006.094-.002.128.031.528.527-2.313 2.075-1.486 2.903.241.242.502.107.604.037a.236.236 0 0 0 .347-.11.24.24 0 0 0-.393-.262.24.24 0 0 0-.065.202c-.061.036-.173.069-.3-.06-.51-.51 1.696-1.681 1.636-2.552l.367.366a1.8 1.8 0 0 0-.424.412Zm1.479-.045c.247.018.49.084.713.193l.526.286-.013-.182 3.895 3.895-.465.464-.749-.748zm3.698-3.578c-.074.53-.475 1-1.19 1.397-.124.069-.295.123-.476.181-.47.15-1.114.363-1.376 1.038l-1.519-1.52 3.329-3.584c.61.652 1.356 1.606 1.232 2.488Z"
      mask="url(#violin_svg__a)"
    />
  </svg>
)
export default SvgViolin
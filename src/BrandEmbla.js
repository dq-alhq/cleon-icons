import * as React from 'react'
const SvgBrandEmbla = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="m14.634 1.006.067.009.07.011.034.008.034.007.034.01.035.01.069.024.033.015.036.014.066.03.033.014.065.035.064.039.092.063.088.07.056.05.053.053.025.029.014.017.015.02.014.017.015.02.015.018.03.038.014.02.014.02.025.04.027.043.023.044.024.047.011.025.022.053.01.03.015.029.01.029.012.03.01.033.012.034.01.033.024.074.011.038.012.04.015.045.092.344.015.059.02.079.02.08.035.166.014.085.018.084.014.088.027.176.014.088.012.092.01.09.01.095.01.093.008.096.008.095.005.098.008.098.014.302.006.42-.004.328-.009.224-.003.114-.007.115-.006.117-.015.234-.01.12-.009.12-.038.411-.003.038-.004.038-.003.04-.006.076-.006.073-.003.036-.004.07-.003.032-.002.034v.034l-.002.029-.002.032v.059l-.004.054v.025l-.002.026-.003.047v.1l-.001.03.001.014v.047l.002.004.001.003h.005l.004.002h.098l.02-.002h.065l.05-.003.054-.003.03-.001h.061l.067-.006h.035l.034-.003.037-.003.038-.003.04-.003h.039l.038-.003.041-.003.044-.004.044-.003h.041l.088-.006.044-.004.09-.008.045-.004.205-.015.2-.014.2-.012.386-.015.19-.004.185-.003h.362l.176.003.171.004.333.015.161.012.157.011.154.015.15.015.147.017.142.02.138.021.136.024.129.025.127.03.122.028.117.03.114.032.11.035.106.035.102.038.098.04.093.041.088.044.085.044.079.047.073.048.073.052.066.05.062.054.055.055.053.059.02.025.04.048.018.024.017.025.015.025.015.023.029.044.015.025.036.069.012.023.01.022.009.025.023.069.015.048.009.049.004.023.003.027.003.023v.025l.003.053v.026l-.003.053-.001.03-.003.028-.002.03-.009.058-.005.03-.006.032-.005.03-.011.05-.015.052-.018.053-.019.052-.022.055-.025.055-.026.055-.03.058-.032.056-.035.059-.036.058-.038.059-.088.117-.094.12-.053.059-.051.061-.173.182-.061.063-.13.123-.067.063-.14.123-.073.063-.151.123-.078.064-.08.058-.25.183-.088.059-.178.117-.091.059-.092.059-.056.035-.059.035-.061.037-.062.038-.066.038-.067.038-.14.079-.074.044-.073.04-.073.04-.074.045-.15.082-.077.04-.073.04-.076.04-.147.078-.073.038-.073.036-.07.037-.135.067-.126.062-.062.03-.055.028-.055.025-.05.025-.048.022-.044.02-.04.014-.037.015-.03.014-.029.01-.025.008-.017.004-.015.003-.007-.003-.006-.005-.006-.01-.005-.011-.004-.015-.003-.014-.001-.02-.003-.02v-.022l.001-.025v-.03l.002-.026.003-.029.001-.03.008-.064.004-.032.014-.102.006-.036.015-.069.007-.035.015-.066.009-.032.007-.032.01-.03.008-.029.01-.03.01-.026.018-.046.009-.022.01-.02.01-.017.009-.015.01-.014.009-.01.009-.006.014-.006.015-.008.007-.005.01-.006.01-.005.01-.004.011-.006.024-.015.026-.011.015-.01.014-.005.03-.018.047-.023.032-.018.034-.019.035-.017.054-.03.018-.01.036-.019.02-.01.036-.02.02-.008.018-.01.019-.01.019-.01.019-.008.2-.103.099-.052.098-.056.097-.053.095-.053.094-.054.184-.11.088-.053.176-.11.085-.055.083-.053.084-.056.08-.054.08-.056.077-.053.076-.054.147-.108.069-.052.067-.054.066-.053.065-.052.122-.103.06-.051.108-.1.098-.098.088-.095.04-.047.04-.044.035-.044.034-.044.03-.044.052-.085.02-.041.021-.044.018-.04.014-.04.012-.039.009-.038.006-.038.003-.038V9.39l-.005-.037-.007-.035-.01-.032-.012-.034-.015-.034-.017-.032-.02-.03-.048-.061-.058-.059-.07-.055-.039-.027-.04-.026-.089-.05-.1-.048-.054-.022-.058-.022-.059-.02-.061-.021-.063-.02-.068-.021-.068-.02-.074-.017-.073-.015-.076-.014-.069-.015-.073-.015-.078-.011-.085-.01-.088-.01-.092-.01-.095-.008-.098-.008-.103-.007-.105-.007-.109-.006-.222-.01-.118-.003-.117-.003h-.117l-.245-.003-.121.001h-.125l-.376.005-.25.008-.127.003-.123.008-.124.004-.123.009-.12.007-.122.009-.117.007-.23.02-.112.011-.11.012-.105.011-.205.03-.095.014-.501.077-.205 1.147-.214 1.148.996 1.164.152.183.151.18.147.176.143.176.14.176.136.173.131.17.13.168.127.166.123.166.12.16.117.162.115.161.11.157.106.157.205.308.099.15.095.15.09.147.088.146.085.144.082.144.08.139.076.14.073.14.07.136.066.135.063.132.062.132.058.132.055.129.052.132.049.126.047.126.043.126.042.123.036.122.034.121.022.076.017.074.02.073.015.07.015.068.015.066.014.064.012.065.012.058.009.059.01.059.006.058.006.054.004.055.003.052.003.05v.098l-.005.094-.004.044-.006.044-.007.044-.018.085-.011.04-.015.04-.03.077-.017.038-.018.037-.018.038-.021.036-.044.074-.025.035-.026.035-.03.035-.029.034-.03.035-.043.049-.044.044-.047.044-.05.038-.051.035-.053.034-.055.029-.059.03-.059.024-.061.02-.063.02-.135.029-.073.01-.073.007h-.232l-.082-.005-.083-.006-.088-.012-.088-.015-.091-.014-.097-.02-.095-.021-.1-.024-.205-.058-.107-.033-.11-.036-.112-.038-.114-.044-.118-.044-.12-.047-.123-.05-.126-.054-.264-.118-.134-.063-.137-.066-.048-.021-.05-.026-.054-.029-.058-.03-.062-.031-.063-.037-.066-.037-.067-.038-.07-.04-.22-.133-.074-.047-.077-.044-.153-.095-.077-.047-.078-.048-.073-.05-.076-.047-.147-.094-.073-.048-.069-.044-.067-.044-.066-.044-.062-.044-.058-.04-.059-.04-.053-.036-.05-.036-.043-.034-.044-.03-.037-.029-.032-.025-.027-.024-.023-.02-.015-.017-.011-.015-.006-.01.001-.006.003-.009.008-.007v-.006l.008-.009.015-.01.03-.023.008-.006.01-.008.01-.005.01-.006.01-.008.011-.007.012-.006.01-.007.024-.015.014-.007.015-.006.012-.009.058-.03.015-.008.015-.007.014-.006.032-.015.03-.014.384-.162 1.337.784.135.077.132.073.129.073.127.07.123.064.122.063.234.117.114.054.109.05.108.048.106.044.102.041.1.04.097.035.092.032.092.03.088.026.085.023.082.021.079.018.076.014.073.012.07.01.068.005h.126l.059-.005.055-.006.052-.008.05-.015.046-.015.044-.019.04-.022.037-.025.033-.026.03-.032.026-.034.023-.038.032-.065.024-.073.015-.078.008-.088.003-.092-.004-.102-.012-.106-.017-.114-.027-.117-.029-.127-.038-.131-.044-.137-.051-.142-.056-.146-.063-.153-.069-.157-.073-.161-.08-.167-.089-.172-.092-.173-.096-.18-.103-.182-.108-.186-.113-.19-.24-.389-.128-.197-.132-.201-.136-.206-.142-.205-.297-.416-.154-.21-.162-.214-.16-.212-.17-.217-.169-.216-.176-.216-.178-.217-.18-.22-.612-.718-.3 1.105-.108.391-.112.389-.114.383-.117.377-.117.374-.123.366-.123.36-.128.357-.129.349-.129.344-.131.337-.132.33-.135.323-.138.313-.136.308-.14.3-.14.29-.14.284-.144.275-.14.267-.144.255-.144.25-.143.238-.144.229-.146.22-.143.208-.143.198-.142.187-.144.176-.142.166-.14.154-.14.142-.14.129-.138.117-.136.107-.135.094-.135.08-.132.068-.128.054-.13.041-.029.008-.061.011-.032.003-.063.006h-.1l-.034-.003-.035-.003-.034-.004-.033-.006-.07-.015-.033-.009-.035-.008-.034-.012-.033-.01-.07-.027-.102-.044-.064-.032-.034-.018-.095-.058-.03-.02-.087-.067-.084-.073-.026-.025-.05-.055-.026-.03-.03-.037-.026-.038-.025-.04-.03-.045-.024-.047-.026-.048-.027-.053-.05-.111-.05-.12-.023-.063-.047-.132L8 21.609l-.02-.073-.022-.074-.041-.149-.038-.155-.02-.08-.033-.16-.032-.165-.015-.082-.026-.164-.012-.084-.02-.164-.022-.247-.012-.162-.002-.079-.003-.059-.002-.064v-.73l.004-.185.001-.093.003-.094.002-.095.009-.282.007-.183.004-.088.003-.088.005-.085.003-.082.005-.08.01-.146.004-.069.004-.063.004-.058.005-.055.006-.05.004-.043.004-.038.006-.033.005-.026.004-.02.004-.01.005-.007.003.002.003-.002.004.003h.005l.004.003.004.002.015.007.004.004.024.015.007.004.018.012.01.006.01.007.044.03.015.008.01.008.015.009.014.01.012.007.03.02.014.01.044.029.044.032.03.02.028.024.367.271-.035.865-.005.094-.001.096v.096l-.003.19v.19l.004.284.006.187.004.093.003.09.006.088.006.091.018.264.014.167.01.082.006.08.02.156.02.15.012.07.01.069.012.067.011.063.015.065.015.059.011.058.015.054.015.053.014.05.03.088.029.08.032.077.03.073.032.066.033.061.036.056.035.053.035.047.038.044.038.038.041.032.04.03.04.021.045.02.044.011.043.01.044.002h.049l.048-.007.05-.012.053-.018.05-.02.057-.027.055-.032.059-.035.058-.044.062-.047.062-.051.064-.059.064-.061.066-.068.07-.073.07-.078.073-.082.073-.088.073-.092.078-.098.08-.103.081-.107.084-.113.087-.127.093-.132.09-.14.093-.142.09-.149.093-.154.094-.161.186-.334.092-.176.092-.18.094-.185.183-.381.092-.198.093-.2.092-.206.092-.208.091-.214.091-.216.088-.22.088-.222.088-.226.088-.229.175-.469.088-.237.084-.24.085-.24.083-.246.082-.244.08-.25.08-.249.078-.249.076-.253.076-.255.073-.256.073-.256.141-.516.322-1.197-.747-.755-.38-.381-.06-.056-.026-.03-.029-.026-.03-.03-.026-.024-.026-.03-.053-.05-.023-.026-.097-.09-.02-.02-.02-.023-.042-.038-.018-.02-.017-.017-.018-.014-.044-.044-.014-.012-.314-.286-2.702.795-.217.067-.214.065-.21.067-.205.064-.202.066-.2.065-.195.066-.194.066-.19.066-.37.129-.18.067-.175.065-.176.066-.173.067-.168.066-.167.067-.166.07-.322.134-.158.069-.156.069-.154.069-.301.14-.293.147-.287.147-.282.15-.139.075-.136.074-.136.079-.289.143-.132.081-.132.082-.126.078-.12.078-.117.077-.111.076-.106.074-.102.073-.1.073-.092.073-.088.07-.085.074-.08.07-.072.068-.07.069-.067.066-.058.066-.059.064-.051.063-.047.063-.044.062-.038.058-.032.06-.03.058-.023.058-.019.056-.015.053-.01.053-.006.05v.052l.005.049.01.048.015.044.019.044.024.044.03.044.033.04.039.039.044.037.048.036.053.035.058.033.044.023.047.022.051.022.053.022.054.02.059.02.061.019.062.017.066.02.069.017.07.014.146.03.077.014.079.015.082.015.083.012.085.011.088.012.088.01.183.02.094.007.193.014.098.006.1.005.103.005.208.006.21.003h.326l.11-.003.11-.001.112-.003.113-.005.114-.005.02-.002.023-.001h.02l.022-.002.041-.003.041-.001h.123l.02-.002.077-.001.018-.002h.038l.014-.001h.036l.014-.002h.015l.03-.001.014-.001.014.001h.012l.012-.001H6.4l.015.004.014.006.015.009.015.01.017.012.018.014.02.015.022.015.02.017.023.02.023.023.093.092.023.025.07.08.024.028.044.055.02.026.041.051.018.027.017.025.033.046.014.024.015.02.019.039.007.017.006.015.005.015.001.014v.01l-.003.01-.004.004-.037.01h-.012l-.029.003-.044.009h-.019l-.041.004-.02.003-.024.001-.023.003h-.025l-.052.005-.054.006-.029.001-.03.004-.09.006-.032.003-.066.006h-.034l-.034.003-.105.006h-.037l-.033.001-.037.003-.151.008-.146.008-.147.005-.144.006-.142.004-.278.003h-.268l-.132-.003H4.6l-.127-.006-.128-.004-.244-.015-.12-.01-.118-.009-.117-.012-.225-.026-.217-.03-.103-.014-.205-.038-.098-.02-.097-.023-.092-.022-.092-.024-.176-.05-.085-.03-.08-.029-.08-.03-.077-.029-.076-.032-.074-.034-.07-.032-.067-.035-.066-.038-.059-.034-.059-.036-.055-.037-.051-.037-.05-.036-.049-.04-.087-.076-.042-.04-.036-.04-.035-.04-.034-.041-.059-.088-.026-.044-.023-.044-.02-.044-.02-.044-.015-.044-.024-.093-.008-.046-.007-.049L1 14.74 1 14.691l.001-.051.003-.052.006-.05.008-.052.01-.053.012-.054.014-.054.018-.055.019-.055.022-.059.025-.059.026-.058.059-.117.032-.06.108-.17.059-.084.064-.088.07-.085.072-.088.078-.088.167-.173.09-.088.095-.088.1-.088.102-.088.107-.088.111-.088.234-.175.124-.088.131-.088.268-.176.141-.088.147-.088.149-.088.152-.088.159-.088.16-.088.166-.088.169-.088.175-.088.18-.088.18-.088.185-.088.19-.088.194-.087.198-.088.202-.088.205-.088.21-.088.214-.088.095-.04.102-.04.113-.045.245-.09.132-.05.278-.103.146-.051.151-.055.157-.054.157-.055.161-.055.161-.055.164-.056.167-.056.166-.055.33-.11.8-.258.152-.047.146-.044.14-.044.269-.08.124-.037.117-.034.11-.03.103-.029.092-.025.085-.02.073-.02.065-.014.054-.012.044-.007.032-.001.227-.005-.23-.223-.038-.035-.044-.04-.047-.042-.052-.044-.056-.05-.059-.051-.066-.056-.067-.058-.073-.059-.073-.062-.08-.063-.079-.065-.085-.068-.175-.138-.088-.07-.188-.147-.095-.073-.193-.15-.197-.149-.102-.073-.098-.073-.1-.074-.196-.146L9.39 6.6l-.097-.07-.095-.069-.094-.067-.092-.068-.088-.063-.088-.061-.085-.062-.082-.058-.082-.056-.076-.053-.076-.05-.226-.146-.114-.074-.111-.07-.226-.135-.113-.066-.111-.063-.223-.123-.11-.059-.108-.058-.108-.056-.106-.053-.21-.1-.103-.046-.203-.088-.098-.04-.096-.04-.096-.036-.093-.034-.088-.032-.176-.059-.085-.024-.08-.022-.08-.02-.077-.019-.074-.014-.07-.012-.07-.01-.065-.007-.063-.005H4.94l-.053.005-.05.005-.043.01-.052.015-.048.02-.044.03-.04.032-.033.037-.03.041-.026.047-.022.051-.019.056-.014.062-.01.064-.005.07-.002.074.003.077.008.082.008.088.015.091.018.093.022.098.026.102.03.107.032.107.08.23.044.118.048.121.053.126.059.13.058.131.063.132.07.138.07.138.073.142.077.144.082.146.085.15.088.15.094.153.095.155.098.157.41.65-.183.419-.007.017-.015.033-.007.019-.014.033-.01.015-.007.018-.007.014L6 9.573l-.006.014-.015.03-.006.014-.014.03-.005.014-.007.015-.015.035-.007.012-.004.01-.02.038-.014.024-.003.006-.004.006-.008.014-.01.01h-.007l-.024-.023-.017-.02-.02-.025-.023-.03-.026-.035-.03-.041-.032-.044-.033-.048-.074-.11-.04-.059-.04-.063-.044-.066-.047-.072-.092-.146-.097-.151-.146-.235-.05-.082-.049-.08-.05-.08-.095-.16-.048-.08-.044-.078-.047-.077-.085-.147-.04-.073-.04-.069-.037-.067-.037-.063-.032-.06-.058-.11-.039-.07-.036-.074-.035-.073-.07-.15-.033-.076-.066-.154-.088-.235-.029-.079-.026-.077-.03-.078-.05-.155-.023-.08-.044-.152-.04-.151-.036-.147-.015-.073-.029-.14-.012-.07-.02-.131-.009-.063-.006-.062-.006-.059-.003-.058v-.056l-.001-.053.001-.052v-.049l.01-.09.007-.04.014-.073.01-.036.012-.035.012-.036.012-.034.029-.07.03-.068.034-.067.018-.03.04-.064.02-.03.064-.087.024-.03.047-.054.025-.025.025-.026.024-.024.027-.025.054-.044.026-.02.03-.02.026-.02.056-.035.088-.044.058-.023.059-.02.107-.021.113-.015.117-.01.126-.002.132.005.137.014.14.02.147.029.153.032.156.04.165.048.167.053.17.061.177.065.181.073.185.08.19.087.19.092.197.097.2.103.203.108.205.115.21.121.212.126.214.132.217.138.22.144.22.146.223.154.226.158.227.164.228.169.232.171.231.18.235.183.234.187.235.19.234.197.234.2.235.206.794.707 1.091-.228.164-.029.157-.03.076-.014.11-.022.035-.004.067-.015.033-.006.063-.01.058-.01.03-.005.026-.004.051-.007.024-.003.022-.005.021-.003.04-.006L15 8.01h.096l.012-.003.015-.006.011-.006.015-.009.024-.023.01-.015.011-.014.01-.02.011-.021.009-.024.011-.026.01-.03.01-.032.008-.033.01-.037.008-.04.01-.04.008-.045.008-.047.008-.05.008-.052.008-.059.008-.058.008-.063.007-.065.009-.069.007-.073.006-.073.008-.078.007-.082.007-.085.007-.088.008-.092.006-.096.007-.1.007-.102.008-.107.005-.11.01-.161.007-.161.005-.156.01-.308v-.44l-.007-.282-.011-.271-.008-.132-.01-.13-.01-.125-.012-.123-.015-.12-.014-.118-.015-.113-.014-.11-.02-.105-.017-.103-.02-.098-.023-.095-.022-.091-.023-.088-.025-.083-.025-.08-.03-.076-.028-.07-.03-.07-.029-.06-.032-.06-.033-.053-.033-.05-.034-.044-.035-.04-.037-.035-.036-.03-.04-.024-.038-.02-.044-.014-.044-.016-.044-.007-.044-.003-.044.001-.044.009-.048.007-.05.015-.05.017-.05.021-.106.059-.054.035-.056.038-.056.044-.058.047-.059.051-.059.056-.058.058-.059.065-.064.067-.063.07-.065.074-.066.08-.067.083-.066.088-.069.09-.07.094-.069.103-.073.102-.073.106-.074.113-.073.114-.073.117-.073.124-.078.126-.155.263-.08.14-.69 1.209-.455.058-.015.002-.017.001h-.216l-.014-.001h-.01l-.01-.002-.03-.005h-.015l-.014-.006h-.006l-.015-.01-.004-.002-.002-.004-.003-.003-.001-.006v-.005l.003-.017.004-.022.009-.03.01-.032.015-.035.015-.04.017-.045.022-.047.02-.054.025-.054.027-.059.03-.059.028-.063.03-.064.032-.066.035-.069.069-.144.073-.146.038-.073.038-.077.118-.222.04-.074.04-.073.038-.073.041-.074.076-.137.039-.066.036-.065.037-.061.037-.059.033-.059.032-.052.033-.05.029-.049.03-.043.064-.096.129-.186.063-.088.126-.173.121-.161.062-.08.178-.223.059-.07.059-.068.058-.066.059-.063.114-.12.059-.059.111-.108.056-.05.108-.097.108-.088.055-.041.052-.04.059-.05.102-.065.053-.03.051-.029.052-.026.05-.024.052-.022.049-.022.05-.017.05-.015.048-.015.061-.014.032-.006.03-.003.032-.003L14.53 1h.034l.034.001.032.003zm.059 7.91-.17.034-.184.044-.175.051-.147.05-.111.044-.066.038-.012.03.167.186.25.256.266.26.217.202.102.079.024-.038.032-.093.038-.139.044-.176.04-.2.042-.23.022-.18v-.128l-.02-.082-.039-.036-.064-.006-.11.01-.146.021zm-7.135-.014-.635.246.19-.355c.246-.465.85-1.148 1.354-1.53q.038-.032.398-.315l.34.24c.186.132.344.26.352.293.007.027-.122.147-.285.25-.17.11-.48.366-.693.565-.27.264-.565.437-1.02.607zm3.648 8.594c-1.582-.21-3.1-1.172-4.01-2.55-.385-.59-.85-1.898-.878-2.47-.018-.344.01-.38.356-.542.205-.092.383-.161.404-.155.015.014.073.348.117.756.161 1.313.985 2.62 2.133 3.364.633.419 1.553.733 2.224.77.26.015.483.06.488.089.01.036-.063.225-.162.432l-.172.381-.503-.073zm.63-11.244c-.286-.285 1.362-.074 2.237.293.5.205.539.234.504.461-.027.19-.875.274-1.386.135-.366-.1-.942-.478-1.355-.888zm3.63 8.857c.23-.244.479-.557.542-.675.155-.307.22-.307.404-.052.082.129.198.278.255.359.073.094.002.245-.239.557-.581.762-1.91 1.785-1.799 1.383.203-.66.47-1.18.838-1.57zm1.685-3.584c-.285-.352-.425-.627-.523-1-.247-.918.131-1.77.474-1.094.194.366.48 1.514.523 2.062.025.268.012.498-.014.507-.036.009-.235-.213-.459-.475z"
    />
  </svg>
)
export default SvgBrandEmbla
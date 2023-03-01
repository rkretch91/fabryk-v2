export const YouTube = ({ id }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={'https://www.youtube.com/embed/' + id}
        key={'id' + new Date().getTime()}
        title={'id' + new Date().getTime()}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

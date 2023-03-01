export const GoogleMap = ({ id }) => {
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/d/u/0/embed?mid=${id}&ehbc=2E312F`}
        width="100%"
        height="450"
        title={'id' + new Date().getTime()}
        key={'id' + new Date().getTime()}
      ></iframe>
    </div>
  )
}

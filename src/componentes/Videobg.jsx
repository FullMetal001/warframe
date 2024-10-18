

const Videobg = () => {
  return (
    <div className="video-bg-container">
      <video autoPlay loop muted className="video-bg">
        <source src="https://www-static.warframe.com/videos/1999/masthead.mp4" type="video/mp4" />
        <source src="https://www-static.warframe.com/videos/1999/masthead.webm" type="video/webm" />
        Tu navegador no soporta el video.
      </video>
    </div>
  )
}

export default Videobg
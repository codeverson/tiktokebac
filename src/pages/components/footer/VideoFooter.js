import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@codeverson</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter__music">
          <MusicNoteIcon classname="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da musica</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;

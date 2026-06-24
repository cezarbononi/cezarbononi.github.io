import profileImage from "../assets/cezito-profile.jpg";

export default function ProfileHud() {
  return (
    <aside className="cy-profile-card" aria-label="Cezar Bononi profile HUD">
      <div className="cy-profile-topline">
        <span>PROFILE://CEZAR_BONONI</span>
        <span className="cy-profile-id">ID:CB_2026</span>
      </div>

      <div className="cy-profile-image-frame">
        <img
          src={profileImage}
          width="1200"
          height="1600"
          alt="Cezar Bononi"
          className="cy-profile-image"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="cy-profile-meta">
        <div>
          <span>ROLE:</span>
          <strong>SOFTWARE_ENGINEER</strong>
        </div>
        <div>
          <span>STATUS:</span>
          <strong className="cy-profile-online">ONLINE</strong>
        </div>
      </div>
    </aside>
  );
}

var playlist = {
  artistName: "songTitles"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, Slowdive){
  delete playlist.Slowdive;
  return playlist;
}
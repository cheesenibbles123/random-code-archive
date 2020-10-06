async function playAudio(message,args,voiceChannel){
	isPlaying = true;
	voiceChannel.join().then(connection =>{
		currentDispatcher = connection
			.play(
        	  	ytdl(args.join(""),{filter:'audioonly',quality:'highestaudio',highWaterMark:1<<25}, {highWaterMark: 1},{bitrate: 192000})
      		)
      		.on("finish",() =>{
      			voiceChannel.leave();
      			isPlaying = false;
      		})
      		.on("error",e=>{
      			console.error(e);
     		 	voiceChannel.leave();
     		 	isPlaying = false;
     		});
     	currentDispatcher.setVolumeLogarithmic(1);
    });
}

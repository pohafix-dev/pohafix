import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    const videoRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovering) {
                videoRef.current.muted = false; // Unmute on hover
                videoRef.current.play().catch(err => console.log("Autoplay blocked:", err));
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                videoRef.current.muted = true; // Re-mute
                videoRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    }, [isHovering]);

    return (
        <motion.div 
            className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-surface-container-highest shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Video Background */}
            <video
                ref={videoRef}
                src={video.src}
                poster={video.thumbnail}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                loop
            />

            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovering ? 'opacity-90' : 'opacity-70'}`}></div>

            {/* Play/Pause Icon Indicator */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-6xl opacity-50">play_circle</span>
                </div>
            )}

            {/* Content Context */}
            <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold font-label mb-3 inline-block uppercase tracking-wider">
                    {video.username}
                </span>
                
                <blockquote className="text-white font-headline text-xl md:text-2xl font-bold italic leading-tight mb-6 line-clamp-3">
                    "{video.quote}"
                </blockquote>

                <Link 
                    to="/order"
                    className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline font-black uppercase tracking-tight flex items-center justify-center gap-2 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all shadow-lg hover:shadow-primary/20"
                >
                    <span className="material-symbols-outlined text-sm">shopping_bag</span> 
                    {video.cta || 'Order Now'}
                </Link>
            </div>

            {/* Sound Indicator Hint */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity">
                <span className="material-symbols-outlined text-white text-sm">volume_off</span>
            </div>
        </motion.div>
    );
};

export default VideoCard;

import AnimatedSidebar from '@/components/ui/AnimatedSidebar';
import BubbleBackground from '@/components/ui/BubbleBackground';
import React from 'react';

const Profile = () => {
  return (
    <div className="h-screen bg-gray-100">
      <AnimatedSidebar />
      <div className="flex items-center justify-center h-screen text-3xl">
        Main Content Here
      </div>
    </div>

    // <BubbleBackground/>
   
  )
};

export default Profile;
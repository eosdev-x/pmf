import React from 'react';
import { BookOpen, Users, Church, Heart, Scroll, Link } from 'lucide-react';
import futureLeadersImg from '/src/assets/future-leaders.jpg';

const MissionPoint = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center space-x-3 text-gray-700">
    <Icon className="h-6 w-6 text-green-600" />
    <span>{text}</span>
  </div>
);

const About = () => {
  return (
    <div className="pt-16">
      <div className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Our Mission</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Core Mission</h2>
              <div className="space-y-4">
                <MissionPoint icon={BookOpen} text="Preach the Gospel" />
                <MissionPoint icon={Users} text="Disciple believers" />
                <MissionPoint icon={Church} text="Train leaders" />
                <MissionPoint icon={Scroll} text="Send evangelists" />
                <MissionPoint icon={Link} text="Unite Christians" />
                <MissionPoint icon={Heart} text="Help the poor" />
              </div>
            </div>
            <div>
              <img
                src={futureLeadersImg}
                alt="Mission work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Preaching the Gospel</h2>
            <p className="text-gray-700 mb-6">
              Our primary objective is to preach the Gospel of Jesus Christ to the lost. Our target area is rainforest villages in the Darién and Panama provinces. The Bible teaches that without faith in Jesus Christ, people remain separated from God by their own sins and they remain under judgement.
            </p>
            <p className="text-gray-700 mb-6">
              Their only hope is Jesus. Through faith in Jesus, they can be saved. Jesus said, "I am the way, and the truth, and the life. No one comes to the Father except through me" (John 14:6). Peter proclaimed, "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved" (Acts 4:12).
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Biblical Foundation</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Matthew 28:18-20</li>
                <li>John 3:16-17</li>
                <li>Mark 16:15-16</li>
                <li>Acts 2:38-42</li>
                <li>Romans 3:21-26</li>
                <li>Romans 6:23</li>
                <li>Ephesians 2:1-10</li>
                <li>2 Peter 3:9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Training Leaders</h2>
            <p className="text-gray-700 mb-6">
              The Apostle Paul gave these instructions to Timothy: "And what you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also" (2 Timothy 2:2). Paul's instructions to Timothy provide the model.
            </p>
            <p className="text-gray-700 mb-6">
              We train faithful, reliable men to be spiritual leaders. The PMF Bible Institute is located in the district of Chimán and was founded in 2014. After 2.5 years of training, graduates receive a diploma in Pastoral Ministry and are equipped to preach the gospel of Christ, to plant new churches, to disciple believers, to shepherd the flock, and to train other faithful men to do the same.
            </p>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Biblical Foundation</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>2 Timothy 2:2</li>
                <li>Matthew 28:19-20</li>
                <li>Mark 16:15-16</li>
                <li>Titus 1:5-9</li>
                <li>1 Timothy 3:1-7</li>
                <li>Acts 20:28</li>
                <li>1 Peter 5:1-4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
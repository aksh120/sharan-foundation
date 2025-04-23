import { useEffect, useState } from 'react';
import { Users, School, Landmark, Award } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  target: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, target, label }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold text-purple-700">{value}+</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  );
};

export default function Impact() {
  const [peopleReached, setPeopleReached] = useState(0);
  const [programsCompleted, setProgramsCompleted] = useState(0);
  const [grantsAwarded, setGrantsAwarded] = useState(0);
  const [partnershipsFormed, setPartnershipsFormed] = useState(0);

  useEffect(() => {
    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      start: number,
      end: number,
      duration: number
    ) => {
      const range = end - start;
      const minTimer = 50;
      let stepTime = Math.abs(Math.floor(duration / range));
      stepTime = Math.max(stepTime, minTimer);

      let startTime = new Date().getTime();
      let endTime = startTime + duration;
      let timer: number;

      const run = () => {
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));
        setter(value);
        if (value === end) {
          clearInterval(timer);
        }
      };

      timer = window.setInterval(run, stepTime);
      return timer;
    };

    const handleScroll = () => {
      const section = document.getElementById('impact');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        animateValue(setPeopleReached, 0, 5000, 2000);
        animateValue(setProgramsCompleted, 0, 120, 2000);
        animateValue(setGrantsAwarded, 0, 25, 2000);
        animateValue(setPartnershipsFormed, 0, 40, 2000);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Impact</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Since our founding, we've made significant progress in our mission to promote gender equality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<Users className="h-6 w-6 text-purple-600" />}
            value={peopleReached}
            target={5000}
            label="People Reached"
          />
          <StatCard 
            icon={<School className="h-6 w-6 text-purple-600" />}
            value={programsCompleted}
            target={120}
            label="Programs Completed"
          />
          <StatCard 
            icon={<Landmark className="h-6 w-6 text-purple-600" />}
            value={grantsAwarded}
            target={25}
            label="Grants Awarded"
          />
          <StatCard 
            icon={<Award className="h-6 w-6 text-purple-600" />}
            value={partnershipsFormed}
            target={40}
            label="Partnerships Formed"
          />
        </div>
      </div>
    </section>
  );
}
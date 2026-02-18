import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Star,
  Calendar
} from 'lucide-react';
import { statsAPI } from '@/services/api';
import type { PublicStats } from '@/types';

const Home = () => {
  const [stats, setStats] = useState<PublicStats | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await statsAPI.getPublicStats();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const programs = [
    {
      title: 'Science Stream',
      description: 'Comprehensive science education with Physics, Chemistry, Biology, and Mathematics.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Commerce Stream',
      description: 'Business studies, Accountancy, Economics, and Computer Applications.',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      title: 'Arts & Humanities',
      description: 'Literature, History, Political Science, and Psychology courses.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-purple-500'
    }
  ];

  const quickStats = [
    { label: 'Students Enrolled', value: '2,500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Expert Faculty', value: '150+', icon: <GraduationCap className="w-6 h-6" /> },
    { label: 'Years of Excellence', value: '25+', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Success Rate', value: '98%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-400">Excellence College</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shaping Future Leaders Through Quality Education and Holistic Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg transition-all transform hover:scale-105"
              >
                Submit Inquiry
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of academic programs designed to prepare students for successful careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`${program.color} p-6 text-white`}>
                  {program.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/inquiry"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Excellence College?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Academic Excellence</h3>
                    <p className="text-gray-600">Consistently ranked among top institutions with outstanding board results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Expert Faculty</h3>
                    <p className="text-gray-600">Highly qualified and experienced teachers dedicated to student success.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Modern Facilities</h3>
                    <p className="text-gray-600">State-of-the-art labs, library, and sports facilities for holistic development.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
              <p className="text-blue-100 mb-6">
                Our admissions team is here to help you with any queries about programs, admissions, or campus life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>admissions@excellencecollege.edu</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Education Street, City, State 12345</span>
                </div>
              </div>
              <Link
                to="/inquiry"
                className="inline-flex items-center mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Submit an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have achieved their dreams with Excellence College.
          </p>
          {stats && (
            <div className="flex justify-center gap-8 mb-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{stats.totalInquiries}+</div>
                <div className="text-blue-200">Inquiries Received</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{stats.satisfaction}%</div>
                <div className="text-blue-200">Parent Satisfaction</div>
              </div>
            </div>
          )}
          <Link
            to="/inquiry"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg transition-all transform hover:scale-105"
          >
            Get Started Today
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-500 mr-2" />
                <span className="text-xl font-bold text-white">Excellence College</span>
              </div>
              <p className="text-sm">
                Shaping future leaders through quality education and holistic development since 1999.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/inquiry" className="hover:text-white transition-colors">Submit Inquiry</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>Science Stream</li>
                <li>Commerce Stream</li>
                <li>Arts & Humanities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@excellencecollege.edu</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Education Street</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Excellence College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

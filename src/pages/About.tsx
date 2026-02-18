import { 
  GraduationCap, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Building2, 
  BookOpen,
  FlaskConical,
  Computer,
  Music,
  Trophy
} from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in education and personal growth.',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Integrity',
      description: 'Building character through honesty, ethics, and moral values.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to enhance learning.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Inclusivity',
      description: 'Creating an environment where every student feels valued and supported.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const facilities = [
    {
      title: 'Modern Classrooms',
      description: 'Spacious, air-conditioned classrooms equipped with smart boards and multimedia systems.',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: 'Science Laboratories',
      description: 'State-of-the-art Physics, Chemistry, and Biology labs for practical learning.',
      icon: <FlaskConical className="w-8 h-8" />
    },
    {
      title: 'Computer Center',
      description: 'Advanced computer lab with high-speed internet and latest software.',
      icon: <Computer className="w-8 h-8" />
    },
    {
      title: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities including basketball, volleyball, and cricket.',
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: 'Library',
      description: 'Well-stocked library with thousands of books, journals, and digital resources.',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: 'Auditorium',
      description: '500-seat auditorium for events, seminars, and cultural programs.',
      icon: <Music className="w-8 h-8" />
    }
  ];

  const galleryImages = [
    { color: 'bg-blue-100', icon: <Building2 className="w-12 h-12 text-blue-600" />, label: 'Campus Building' },
    { color: 'bg-green-100', icon: <BookOpen className="w-12 h-12 text-green-600" />, label: 'Library' },
    { color: 'bg-purple-100', icon: <FlaskConical className="w-12 h-12 text-purple-600" />, label: 'Science Lab' },
    { color: 'bg-orange-100', icon: <Computer className="w-12 h-12 text-orange-600" />, label: 'Computer Lab' },
    { color: 'bg-red-100', icon: <Trophy className="w-12 h-12 text-red-600" />, label: 'Sports Ground' },
    { color: 'bg-yellow-100', icon: <Music className="w-12 h-12 text-yellow-600" />, label: 'Auditorium' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Excellence College</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building a legacy of educational excellence and shaping the leaders of tomorrow
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1999, Excellence College began with a vision to provide quality education 
                  that goes beyond textbooks. What started as a small institution with just 50 students 
                  has grown into one of the region's most respected educational establishments.
                </p>
                <p>
                  Over the past 25 years, we have consistently evolved our teaching methodologies, 
                  embraced technological advancements, and expanded our infrastructure to meet the 
                  changing needs of education while maintaining our core values.
                </p>
                <p>
                  Today, with over 2,500 students and 150+ faculty members, we continue our commitment 
                  to academic excellence and holistic development, preparing students not just for exams, 
                  but for life.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a nurturing and stimulating environment where students can discover their 
                potential, develop critical thinking skills, and acquire knowledge that prepares them 
                for higher education and meaningful careers. We are committed to fostering academic 
                excellence, character development, and social responsibility in every student.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a center of educational excellence that empowers students to become 
                innovative thinkers, ethical leaders, and compassionate global citizens. We envision 
                a future where our graduates make significant contributions to society and inspire 
                positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Excellence College
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our campus is equipped with modern infrastructure to support comprehensive learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our beautiful campus
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.color} rounded-xl aspect-square flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
              >
                {image.icon}
                <span className="mt-4 text-gray-700 font-medium">{image.label}</span>
              </div>
            ))}
          </div>
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
                Shaping future leaders through quality education and holistic development.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/inquiry" className="hover:text-white transition-colors">Submit Inquiry</a></li>
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
                <li>+1 (555) 123-4567</li>
                <li>info@excellencecollege.edu</li>
                <li>123 Education Street</li>
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

export default About;

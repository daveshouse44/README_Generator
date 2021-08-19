// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return '';

  }else if (license === 'MIT'){
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  
  }else if (license === 'GPL 3.0') { 
    return `![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  
  }else if (license === 'BSD 3') { 
    return `![License: ${license}](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  
  }else if (license === 'APACHE 2.0') { 
    return `![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return '';

  }else if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'; 
  
  }else if (license === 'GPL 3.0'){
    return 'https://www.gnu.org/licenses/gpl-3.0';
  
  }else if (license === 'BSD 3'){ 
    return 'https://opensource.org/licenses/BSD-3-Clause';
  
  }else if (license === 'APACHE 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return `This project has no licensing.`;

  }else if (license === 'MIT'){
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  
  }else if (license === 'GPL 3.0'){
    return `This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`

  }else if (license === 'BSD 3'){
    return `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`

  }else if (license === 'APACHE 2.0'){
    return `Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  https://github.com/${data.github}/${data.title}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Contributions](#Contributions)
  * [Credits](#Credits)
  * [Questions?](#Questions?)
  
  ## Installation 
  Required dependencies to be installed for application functionality: ${data.dependencies}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  License info here: ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contributors}

  ## Tests
  For tests use the following commands: ${data.test}

  ## Credits
  ${data.credit}

  ## Questions?
  Contact:
  *GitHub: https://github.com/${data.github}
  *Email: ${data.email}

`;
}

module.exports = generateMarkdown;

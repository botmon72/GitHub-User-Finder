//851a412a2c6ea05d81d5
//0be59cdb69de20b687b2f2ed29427c81bbe36927

class Github{
  constructor(){
    this.client_id = '851a412a2c6ea05d81d5';
    this.client_secret = '0be59cdb69de20b687b2f2ed29427c81bbe36927';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUserProfile(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profileData = await profileResponse.json();

    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }
}